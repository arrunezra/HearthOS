<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

require_once '../config/database.php';
require_once __DIR__ . '/../error_log_config.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$db = Database::getInstance();

$userId      = isset($_POST['userid']) ? trim($_POST['userid']) : '';
$displayName = isset($_POST['displayName']) ? trim($_POST['displayName']) : '';
// 🎯 READ THE NEW FORMDATA FIELD
$gifFrom     = isset($_POST['gifFrom']) ? trim($_POST['gifFrom']) : '';

if (empty($userId) || empty($displayName) || !isset($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid parameters or missing file tracking payloads."]);
    exit();
}

// 📂 Target Path Allocations
$baseUploadDir = "../uploads/chats/" . $displayName . "/";
$thumbsDir     = "../uploads/chats/" . $displayName . "/thumbs/";
$allowedMimes  = ['image/jpeg', 'image/png', 'image/gif'];

// Ensure Storage Paths Exist
if (!is_dir($baseUploadDir)) mkdir($baseUploadDir, 0755, true);
if (!is_dir($thumbsDir)) mkdir($thumbsDir, 0755, true);

$fileTmpPath = $_FILES['file']['tmp_name'];
$fileName    = $_FILES['file']['name'];
$fileType    = $_FILES['file']['type'];

if (!in_array($fileType, $allowedMimes)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Unsupported graphic MIME type."]);
    exit();
}

// Generate Safe Distinct Filenames
$ext = pathinfo($fileName, PATHINFO_EXTENSION);
$ext = $ext ? $ext : (($fileType === 'image/png') ? 'png' : (($fileType === 'image/gif') ? 'gif' : 'jpg'));
$uniquePrefix = $userId . "_" . microtime(true);

// 🎯 DESIGN REQUIREMENT CONDITIONS:
if ($gifFrom === 'Giphy') {
    // Keep it exactly as a .gif format to preserve animations
    $mainFileName = $uniquePrefix . ".gif";
} else {
    // Normal files fallback to original extension logic
    $mainFileName = $uniquePrefix . "." . $ext;
}

// Thumbnail target extension remains ALWAYS forced to .jpg for lightweight initial renders
$thumbFileName = "thumb_" . $uniquePrefix . ".jpg";

$targetMainPath  = $baseUploadDir . $mainFileName;
$targetThumbPath = $thumbsDir . $thumbFileName;

// Move Original Image to Primary Disk Space
if (!move_uploaded_file($fileTmpPath, $targetMainPath)) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to write source media array to file storage destination."]);
    exit();
}

// 🎨 HELPER FUNCTION: Native Square Aspect Thumbnail Compression Generation via GD Engine
function generateImageThumbnail($sourcePath, $destPath, $mimeType, $thumbSize = 200) {
    switch ($mimeType) {
        case 'image/jpeg': $srcImage = imagecreatefromjpeg($sourcePath); break;
        case 'image/png':  $srcImage = imagecreatefrompng($sourcePath);  break;
        case 'image/gif':  $srcImage = imagecreatefromgif($sourcePath);  break;
        default: return false;
    }

    if (!$srcImage) return false;

    $width = imagesx($srcImage);
    $height = imagesy($srcImage);

    // Calculate Aspect Matching Offsets for clean Center-Cropping
    if ($width > $height) {
        $srcX = ($width - $height) / 2;
        $srcY = 0;
        $srcW = $height;
        $srcH = $height;
    } else {
        $srcX = 0;
        $srcY = ($height - $width) / 2;
        $srcW = $width;
        $srcH = $width;
    }

    // Allocate Blank High-Res Rendering Canvas Target Workspace
    $thumbCanvas = imagecreatetruecolor($thumbSize, $thumbSize);

    // Handle transparent channels safely for PNG/GIF assets before merging to JPEG canvas bounds
    if ($mimeType === 'image/png' || $mimeType === 'image/gif') {
        $whiteBackground = imagecolorallocate($thumbCanvas, 255, 255, 255);
        imagefill($thumbCanvas, 0, 0, $whiteBackground);
    }

    // Resample original graphic asset space down onto layout bounds parameters
    imagecopyresampled($thumbCanvas, $srcImage, 0, 0, $srcX, $srcY, $thumbSize, $thumbSize, $srcW, $srcH);

    // Output is ALWAYS forced to imagejpeg with steady compression ratios
    imagejpeg($thumbCanvas, $destPath, 80);

    imagedestroy($srcImage);
    imagedestroy($thumbCanvas);
    return true;
}

// Invoke thumbnail processor (For Giphy, it takes the newly saved source .gif and center-crops frame 1 to a .jpg)
$thumbCreated = generateImageThumbnail($targetMainPath, $targetThumbPath, $fileType);

// 🌍 Generate Public URL Signatures
$baseUrl = 'https://hearthos.jeasuns.com/api/';

$publicMainUrl  = $baseUrl . str_replace('../', '', $targetMainPath);
$publicThumbUrl = $thumbCreated ? ($baseUrl . str_replace('../', '', $targetThumbPath)) : $publicMainUrl;

// 💾 Step 3: Log Metadata Properties inside MySQL Matrix via PDO Connection Handshakes
try {
    $stmt = $db->prepare("INSERT INTO chat_messages (room_id, sender_id, media_url, thumb_url, mime_type) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([
        $displayName, 
        $userId,  
        $publicMainUrl, 
        $publicThumbUrl, 
        $fileType
    ]);

    // Send successful response object back to React Native Axios lifecycle stream
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "url" => $publicMainUrl,
        "thumbUrl" => $publicThumbUrl,
        "message" => "Media elements written to database logs flawlessly."
    ]);

} catch (PDOException $ex) {
    error_log("Action Error Trace: " . $ex->getMessage());
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database transactional fault: " . $ex->getMessage()]);
}