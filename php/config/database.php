<?php
class Database {
    private static $instance = null;
    private $conn;

    private $host = "localhost";
    private $db_name = "jeasunsc_hearthos";
    private $username = "adminhearthos";
    private $password = "Arrunmozehi@123";

    private function __construct() {
        try {
            $this->conn = new PDO(
                "mysql:host={$this->host};dbname={$this->db_name};charset=utf8mb4",
                $this->username,
                $this->password,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ]
            );
        } catch(PDOException $e) {
            error_log("Connection Error: " . $e->getMessage());
            die(json_encode(["error" => "Database connection failed"]));
        }
    }

    public static function getInstance() {
        if (!self::$instance) {
            self::$instance = new Database();
        }
        return self::$instance->conn;
    }
}