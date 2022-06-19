<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    require_once("ConexionBD.php");
    
    $json = file_get_contents('php://input');
    $params = json_decode($json);

    if (isset($params)) {
        $matricula = $params->matricula;
        $conexion = conexion();
        $result = mysqli_query($conexion, "SELECT * FROM curso WHERE Profesor_Matricula = '$matricula'");
        if($resultados = mysqli_fetch_array($result)) {
            $data[] = $resultados;
            $json = json_encode($data);
            echo $json;
        } else {
            class Result{};
            $response = new Result();
            $response->resultado = 'Error';
            $response->mensaje = mysqli_error($conexion);
            echo json_encode($response);
        }
        
    } else {
        class Result{};
        $response = new Result();
        $response->resultado = 'Error';
        $response->mensaje = 'No paso de parametros';
        echo json_encode($response);
    }
    

?>