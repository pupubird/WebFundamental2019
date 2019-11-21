<?php if (isset($_POST['signup'])){
    $connect = mysqli_connect('localhost', 'root', '', 'registration')
           or die("Error");
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
?>