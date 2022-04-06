<?php
	header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input');
    $params = json_decode($json);
    require_once("ConexionBD.php");
    $conexion = conexion();
    if(isset($params)){
        mysqli_query($conexion,"UPDATE Usuario SET Contrsaenia = $params->contrasenia, Perfil = $params->perfil
                                WHERE idUsuario = $params->matricula");
        $json_response = ['response' => '1'];
        $json = json_encode($json_response);
        echo $json;


        header('Content-Type: application/json');

    }

?>