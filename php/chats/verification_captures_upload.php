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
$photoSlot   = isset($_POST['photoSlot']) ? intval($_POST['photoSlot']) : 0;

if (empty($userId) || empty($displayName) || !isset($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Missing core validation structural params."]);
    exit();
}

// 📂 Target Path Directory Allocations
$baseUploadDir = "../uploads/verifications/" . $displayName . "/";
$thumbsDir     = "../uploads/verifications/" . $displayName . "/thumbs/";

// Ensure storage partitions exist on disk
if (!is_dir($baseUploadDir)) mkdir($baseUploadDir, 0755, true);
if (!is_dir($thumbsDir)) mkdir($thumbsDir, 0755, true);

$fileTmpPath = $_FILES['file']['tmp_name'];
$fileName    = $_FILES['file']['name'];
$fileType    = $_FILES['file']['type'];

// Generate safe distinct file tracking keys
$uniquePrefix   = $userId . "_slot_" . $photoSlot . "_" . microtime(true);
$targetFileName = $uniquePrefix . ".jpg";
$thumbFileName  = "thumb_" . $uniquePrefix . ".jpg";

$targetMainPath  = $baseUploadDir . $targetFileName;
$targetThumbPath = $thumbsDir . $thumbFileName;

// Move original file to storage destination disk space
if (!move_uploaded_file($fileTmpPath, $targetMainPath)) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed writing media stream chunk arrays to storage."]);
    exit();
}

// 🎨 HELPER FUNCTION: High-Performance Center-Clipped JPG Thumbnail Processing Engine via GD Core
function generateVerificationThumbnail($sourcePath, $destPath, $thumbSize = 200) {
    // Front camera frames usually map to JPEG strings natively out of React Native bridges
    $srcImage = imagecreatefromjpeg($sourcePath);
    if (!$srcImage) return false;

    $width  = imagesx($srcImage);
    $height = imagesy($srcImage);

    // Calculate center crop boundaries for a clean aspect ratio look
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

    // Allocate blank workspace canvas layout coordinates
    $thumbCanvas = imagecreatetruecolor($thumbSize, $thumbSize);
    
    // Copy and resample image bounds
    imagecopyresampled($thumbCanvas, $srcImage, 0, 0, $srcX, $srcY, $thumbSize, $thumbSize, $srcW, $srcH);

    // Compress down cleanly into target path file layout boundaries
    $success = imagejpeg($thumbCanvas, $destPath, 80);

    imagedestroy($srcImage);
    imagedestroy($thumbCanvas);
    return $success;
}

// Execute thumbnail processing step
$thumbCreated = generateVerificationThumbnail($targetMainPath, $targetThumbPath);

// 🌍 Generate Public URL Path signatures matching domain setup
$baseUrl        = 'https://hearthos.jeasuns.com/api/';
$publicMainUrl  = $baseUrl . str_replace('../', '', $targetMainPath);
$publicThumbUrl = $thumbCreated ? ($baseUrl . str_replace('../', '', $targetThumbPath)) : $publicMainUrl;

// 💾 Step 3: Write metadata coordinates straight down into your database layer matrix
try {
    $stmt = $db->prepare("INSERT INTO verification_captures (room_id, sender_id, media_url, thumb_url, photo_slot) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([
        $displayName, 
        $userId,  
        $publicMainUrl, 
        $publicThumbUrl,
        $photoSlot
    ]);

    // Send unified payload mapping configurations back to React Native Axios lifecycle hook
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "url" => $publicMainUrl,
        "thumbUrl" => $publicThumbUrl,
        "message" => "Verification verification chunk and thumbnail logged cleanly inside database layers."
    ]);

} catch (PDOException $ex) {
    error_log("Database capture transaction error crash trace: " . $ex->getMessage());
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Transactional runtime database error: " . $ex->getMessage()]);
}