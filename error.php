<div class="error">
    <?php if (isset($_POST['signup']) OR isset($_POST['login'])){
        if(isset($_SESSION['error'])){
            echo $_SESSION['error'];
        }
    } ?>
</div>