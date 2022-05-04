<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    require_once("ConexionBD.php");

    //$base64 = $_POST['img'];
    //$usuario = $_POST['usuario'];
    $json = file_get_contents('php://input');
    $params = json_decode($json);
    $base64 = $params->img;
    $usuario = $params->usuario;

    $base_to_php = explode(',', $base64);
    $data = base64_decode($base_to_php[1]);
    $path_Generico = getcwd();
    $filepath =$path_Generico.'\User'.$usuario.'.png';

    file_put_contents($filepath, $data);

    echo $filepath;


    $conexion = conexion();
    if(isset($filepath)){
        mysqli_query($conexion,"UPDATE Usuario SET  Perfil = $filepath
                                WHERE idUsuario = $usuario");
        $json_response = ['Respuesta' => 'Exitoso'];
        $json = json_encode($json_response);
        echo $json;


        header('Content-Type: application/json');

    }
?>