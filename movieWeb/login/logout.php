

<?php
     session_start();

    unset($_SESSION['userId']);
    unset($_SESSION['userName']);
    unset($_SESSION['grane']);
    unset($_SESSION['userPoint']);

    echo "
    <script>
        location.href='../index.php';
    </script>
    ";

?>
