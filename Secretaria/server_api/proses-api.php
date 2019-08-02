<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

include "library/config.php";

$postjson = json_decode(file_get_contents('php://input'),true);
$today = date('Y-m-d');

if($postjson['aksi'] == 'add'){

    $query = mysqli_query($mysqli,"INSERT INTO votantes SET
    name_customer = '$postjson[name_customer]',
    desc_customer = '$postjson[desc_customer]',
    created_at = '$today'
    ");

    $idcust = mysqli_insert_id($mysqli);

    if($query) $result = json_encode(array('success'=>true,'customer_id'=>$idcust)); //podria cambiarse por DPI
    else $result = json_encode(array('success'=>false));

    echo $result;
}

elseif ($postjson['aksi'] == 'getdata'){
    $data = array();
    $query = mysqli_query($mysqli,"SELECT * FROM votantes ORDER BY customer_id DESC LIMIT $postjson[start],$postjson[limit]");

    while($row = mysqli_fetch_array($query)){
        $data[] = array{
            'customer_id' => $row['customer_id'],
            'name_customer' => $row['name_customer'],
            'desc_customer' => $row['desc_customer'],
            'created_at' => $row['created_at'],

        }
    }

    if($query) $result = json_encode(array('success'=>true,'result'=>$data)); //podria cambiarse por DPI
    else $result = json_encode(array('success'=>false));

    echo $result;
}

?>