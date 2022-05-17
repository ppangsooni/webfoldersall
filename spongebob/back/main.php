<?php
    include('db.php');
    $user_no=$_SESSION['no'];
    if($user_no){
        print $_SESSION['id']."님 환영합니다";

    }else{
        echo"        
        <script>
        alert('들렷다갑니다');
        location.href='login.php';
        </script> 
        ";
    }

?>


<?php
    include('../view/header.php');
    include('../view/main.html');
?>