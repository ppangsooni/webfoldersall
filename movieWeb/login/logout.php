

<?php
     session_start();

    unset($_SESSION['userId']);
    unset($_SESSION['userName']);
    unset($_SESSION['grade']);
    unset($_SESSION['userPoint']);

    echo "
    <script>
        location.href='../index.php';
    </script>
    ";

?>
