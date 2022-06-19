<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    require_once("ConexionBD.php");
    
    $json = file_get_contents('php://input');
    $params = json_decode($json);

    if (isset($params)) {
        $NRC = $params->NombreClase;
        $Nombre = $params->Materia;
        $Descripcion = $params->Datos;
        $MatriculaDocente = $params->MatriculaProfesor;


        $conexion = conexion();
        if (mysqli_query($conexion, "INSERT INTO curso (NRC,Nombre,Descripcion,Profesor_Matricula) VALUES ('$NRC','$Nombre','$Descripcion','$MatriculaDocente')")) {
            $clases = mysqli_query($conexion,"SELECT Nombre, Descripcion FROM curso WHERE Profesor_Matricula = '$MatriculaDocente'");
            if ($result = mysqli_fetch_array($clases)) {
                $data[] = $result;
                $json = json_encode($data);
                echo $json;
            }
        }
        else {
                class Result{}
                $response = new Result();
                $response->resultado = 'Error';
                $response->mensaje = mysqli_error($conexion);
                echo json_encode($response);
        }
    }
    else {
            class Result{}
                $response = new Result();
                $response->resultado = 'Error';
                $response->mensaje = 'No paso de parametros';
                echo json_encode($response);
    }



?>