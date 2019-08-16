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

  elseif($postjson['aksi']=='update'){
  	$query = mysqli_query($mysqli, "UPDATE master_customer SET 
  		name_customer='$postjson[name_customer]',
  		desc_customer='$postjson[desc_customer]' WHERE customer_id='$postjson[customer_id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }

  elseif($postjson['aksi']=='delete'){
  	$query = mysqli_query($mysqli, "DELETE FROM master_customer WHERE customer_id='$postjson[customer_id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }
  //DATOS DE VOTANTE EDITADO---------------------------------------------------------------------------------------------------------
  elseif($postjson['aksi']=='getdata'){
    $query = mysqli_query($mysqli, 
    "SELECT v.DPI AS DPI, v.Nombre as Nombre, m.Codigo_mesa AS Mesa, c.ID_centro AS Centro
     FROM Votante v
     INNER JOIN Mesa m ON v.Codigo_mesa = m.Codigo_mesa
     INNER JOIN Centro c on m.ID_centro = c.ID_centro
     WHERE v.DPI ='$postjson[DPI]'
    ");

  	$check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'DPI' => $data['DPI'],
        'Nombre' => $data['Nombre'],
        'Clave' => $data['Clave'],
        'Mesa' => $data['Mesa'],
        'Centro' => $data['Centro'],
      );

      $result = json_encode(array('success'=>true, 'result'=>$datauser));  

    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
      
    }
    echo $result;

  }
  //-----------------------------------------------------------------------------------------------------------------------------------

  //LOGIN EDITADO---------------------------------------------------------------------------------------------------------
  elseif($postjson['aksi']=="login"){
    $password = $postjson['password'];
    $Nombre= $postjson['Nombre'];
    $query = mysqli_query($mysqli, 
    "SELECT * FROM Secretaria WHERE Clave='$password' AND Nombre='$Nombre'");
    $check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'ID_secretaria' => $data['Id_Secretaria'],
        'Nombre' => $data['Nombre'],
        'Clave' => $data['Clave']
      );

      $result = json_encode(array('success'=>true, 'result'=>$datauser));  
      
      /*if($data['status']=='y'){
        $result = json_encode(array('success'=>true, 'result'=>$datauser));
      }else{
        $result = json_encode(array('success'=>false, 'msg'=>'Account Inactive')); 
      }*/
    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
      
    }
    echo $result;
  }
  //---------------------------------------------------------------------------------------------------------------------

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