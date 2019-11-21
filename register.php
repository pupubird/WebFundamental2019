<?php

include('error.php');

session_start();

$connect = mysqli_connect('localhost', 'root', '', 'registration')
           or die("Error");

if ($connect){
    $create = "CREATE TABLE IF NOT EXISTS usertable (
               email VARCHAR(255) PRIMARY KEY,
               psw VARCHAR(255)
    )";
    mysqli_query($connect, $create);
}
?>