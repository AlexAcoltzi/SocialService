<?php
	header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input');
    $params = json_decode($json);
    require_once("ConexionBD.php");
    $conexion = conexion();
	$registros = mysqli_query($conexion, "SELECT * FROM usuario where IdUsuario='$params->matricula'");
	if ($resultado = mysqli_fetch_array($registros)) {
        mysqli_free_result($registros);
        $registros=mysqli_query($conexion,"SELECT matricula,nombre,paterno,materno,contrasenia FROM Usuario inner join Profesor on IdUsuario=Matricula WHERE Matricula='$params->matricula'");
        if($result=mysqli_fetch_array($registros)){
            $datos[] = $result;
            $datos[0]['tipo']="Profesor";
            if($datos[0]['contrasenia']!=$params->password){
                $datos[0]['contrasenia']="";
            }      
        }
        mysqli_free_result($registros);
        $registros=mysqli_query($conexion,"SELECT matricula,nombre,paterno,materno,contrasenia FROM Usuario inner join Alumno on IdUsuario=Matricula WHERE Matricula='$params->matricula'");
        if($result=mysqli_fetch_array($registros)){
            $datos[] = $result;
            $datos[0]['tipo']="Alumno";
            if($datos[0]['contrasenia']!=$params->password){
                $datos[0]['contrasenia']="";
            }      
        }
        
    }
    $json = json_encode($datos);

    echo $json;
    
?>

