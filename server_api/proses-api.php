<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "library/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');


  if($postjson['aksi']=='add'){

  	$query = mysqli_query($mysqli, "INSERT INTO master_customer SET
  		name_customer = '$postjson[name_customer]',
  		desc_customer = '$postjson[desc_customer]',
  		created_at	  = '$today'  
  	");

  	$idcust = mysqli_insert_id($mysqli);

  	if($query) $result = json_encode(array('success'=>true, 'customerid'=>$idcust));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }
  //ACTUALIZAR VOTANTE------------------------------------------------------------------------------------------------------------------
  elseif($postjson['aksi']=='update'){
  	$query = mysqli_query($mysqli, "UPDATE Votante SET 
  		Nombre='$postjson[Nombre]',
  		Empadronado='$postjson[Empadronado]' 
      WHERE DPI='$postjson[DPI]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;
  }
 //-----------------------------------------------------------------------------------------------------------------------------------

  //ELIMINAR VOTANTE------------------------------------------------------------------------------------------------------------------
  elseif($postjson['aksi']=='delete'){
  	$query = mysqli_query($mysqli, "DELETE FROM Votante WHERE DPI='$postjson[DPI]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }
  //-----------------------------------------------------------------------------------------------------------------------------------

  //EN ESTE QUERY CON PHP SE OBTIENE EL VOTANTE CON EL DPI INGRESADO DESDE EL HTML-----------------------------------------------------
  elseif($postjson['aksi']=='getVotanteDPI'){
    $DPI = $postjson['DPI'];
    $query = mysqli_query($mysqli, 
    "SELECT v.DPI AS DPI, v.Nombre as Nombre, v.Empadronado, m.Codigo_Mesa AS codigoMesa, c.Id_Centro
     FROM Votante v
     INNER JOIN Mesa m ON v.Codigo_Mesa = m.Codigo_Mesa
     INNER JOIN Centro c on m.Codigo_Centro = c.Id_Centro
     WHERE v.DPI = $DPI
    ");

  	$check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'DPI' => $data['DPI'],
        'Nombre' => $data['Nombre'],
        'Empadronado' => $data['Empadronado'],
        'Mesa' => $data['codigoMesa'],
        'Centro' => $data['Id_Centro'],
      );

      $result = json_encode(array('success'=>true, 'result'=>$datauser));  

    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Votante no encontrado'));
      
    }
    echo $result;

  }
  //-----------------------------------------------------------------------------------------------------------------------------------

  //SE OBTIENEN TODOS LOS VOTANTES DE LA BASE DE DATOS CON EL LIMITE ESPECIFICADO EN HOME.JS-------------------------------------------
  elseif($postjson['aksi']=='getdata'){
  	$data = array();
    $query = mysqli_query($mysqli, 
    "SELECT v.DPI AS DPI, v.Nombre as Nombre, v.Empadronado, m.Codigo_Mesa AS codigoMesa, c.Id_Centro
    FROM Votante v
    INNER JOIN Mesa m ON v.Codigo_Mesa = m.Codigo_Mesa
    INNER JOIN Centro c on m.Codigo_Centro = c.Id_Centro
    ORDER BY v.DPI DESC 
    LIMIT $postjson[start],$postjson[limit]");

  	while($row = mysqli_fetch_array($query)){

  		$data[] = array(
  			'DPI' => $row['DPI'],
  			'Nombre' => $row['Nombre'],
  			'Empadronado' => $row['Empadronado'],
        'Mesa' => $row['codigoMesa'],
        'Centro' => $row['Id_Centro'],

  		);
  	}

  	if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  	else $result = json_encode(array('success'=>false));

  	echo $result;

  }
  //-----------------------------------------------------------------------------------------------------------------------------------

  //LOGIN------------------------------------------------------------------------------------------------------------------------------
  elseif($postjson['aksi']=="login"){
    $password = $postjson['password'];
    $Nombre= $postjson['Nombre'];
    $query = mysqli_query($mysqli, 
    "SELECT * 
     FROM Secretaria 
     WHERE Clave='$password' AND Nombre='$Nombre'");
    $check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'ID_secretaria' => $data['Id_Secretaria'],
        'Nombre' => $data['Nombre'],
        'Clave' => $data['Clave']
      );

      $result = json_encode(array('success'=>true, 'result'=>$datauser));  
    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
      
    }
    echo $result;
  }
  //---------------------------------------------------------------------------------------------------------------------------------

  /*elseif($postjson['aksi']=="register"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "INSERT INTO master_user SET
      username = '$postjson[username]',
      password = '$password',
      status   = 'y'
    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
  }*/


?>