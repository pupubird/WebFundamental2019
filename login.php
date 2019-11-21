<?php if (isset($_POST['login'])){
    $connect = mysqli_connect('localhost', 'root', '', 'registration')
           or die("Error");
    $email = mysqli_real_escape_string($connect, $_POST['email']);
    $password = mysqli_real_escape_string($connect, $_POST['psw']);
    
    $check = "SELECT * FROM usertable WHERE email='$email' AND psw='$password'";
    $result = mysqli_query($connect, $check);

    if (mysqli_num_rows($result) > 0){
        echo "<div class='center-vertical'><p style='padding: 0.5%; text-align: center; border: 1px solid green; color: green;'>Welcome, click <a href='index.php'>here</a> to return</div>";
    }
    else {
        $_SESSION['error'] = "<div class='center-vertical'><p style='padding: 0.5%; text-align: center; border: 1px solid red; color: red;'>Invlid Username or Password, click <a href='index.php'>here</a> to return</div>";
    }

}
?>