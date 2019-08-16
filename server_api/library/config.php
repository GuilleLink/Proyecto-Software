<?php

    define('DB_NAME', 'ProyectoTSEIonic'); // DATABASE
    define('DB_USER', 'root'); // ROOT DEFAULT MYSQL
    define('DB_PASSWORD', 'MoscarronTSE');  // PASSWORD
    define('DB_HOST', '35.222.87.198'); // LOCAL IF YOU USE LOCAL.

    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);


?>

