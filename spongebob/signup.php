<?php
include('db.php');
 print_r($_GET);
 print_r($_POST);
 
$id=$_POST['id'];
$pw=$_POST['pw'];
$name=$_POST['name'];
$location=$_POST['location'];
$age=$_POST['age'];
$sex=$_POST['sex'];
$email=$_POST['email'];

$sql="inser into member set
email = '$id'
password = '$pw'
name = '$name'
age = '$age'
sex = '$sex'
location = '$location'

";
echo $sql;

$result = $conn->query(($sql));

echo $result;
?>