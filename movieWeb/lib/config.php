<?php
    session_start();
    if (isset($_SESSION["userId"])) {
            $userId = $_SESSION["userId"];
    } else {
        $userId = "";
    } if (isset($_SESSION["userName"])) {
        $userName = $_SESSION["userName"];
    } else {
        $userName = "";
    }
?>
