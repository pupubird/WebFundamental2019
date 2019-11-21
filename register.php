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

if (isset($_POST['signup'])){
    $email = mysqli_real_escape_string($connect, $_POST['email']);
    $password_1 = mysqli_real_escape_string($connect, $_POST['psw']);
    $password_2 = mysqli_real_escape_string($connect, $_POST['psw-repeat']);

    $email_check = "SELECT * FROM usertable WHERE email='$email'";
    $result = mysqli_query($connect, $email_check);
    $email_result = mysqli_fetch_assoc($result);

    if($email_result['email'] === $email){
        $_SESSION['error'] = "<div class='center-vertical'><p style='padding: 0.5%; text-align: center; border: 1px solid red; color: red;'>Already Exists</p></div>";
    }
    else {
        if ($password_1 === $password_2){
            $query = "INSERT INTO usertable (email, psw)
                        VALUES ('$email', '$password_1')";
            mysqli_query($connect, $query);
            echo "<div class='center-vertical'><p style='padding: 0.5%; text-align: center; border: 1px solid green; color: green;'>successful</p></div>";
        }
        else{
            $_SESSION['error'] = "<div class='center-vertical'><p style='padding: 0.5%; text-align: center; border: 1px solid red; color: red;'>Oops! Password did not match! Try again. </p></div>";
        }
    }

}

if (isset($_POST['login'])){
    $email = mysqli_real_escape_string($connect, $_POST['email']);
    $password = mysqli_real_escape_string($connect, $_POST['psw']);
    
    $check = "SELECT * FROM usertable WHERE email='$email' AND psw='$password'";
    $result = mysqli_query($connect, $check);

    if (mysqli_num_rows($result) > 0){
        echo "<div class='center-vertical'><p style='padding: 0.5%; text-align: center; border: 1px solid green; color: green;'>Welcome</p></div>";
    }
    else {
        $_SESSION['error'] = "<div class='center-vertical'><p style='padding: 0.5%; text-align: center; border: 1px solid red; color: red;'>Invlid Username or Password</p></div>";
    }

}

?>