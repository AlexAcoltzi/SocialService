<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
require_once("ConexionBD.php");

$json = file_get_contents('php://input');
$params = json_decode($json);

if (isset($params)) {
}

?>