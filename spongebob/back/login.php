<?php
    
    include('db.php');
    print_r($_POST);
    $id=$_POST['username'];
    $pw=$_POST['password'];

    $sql="select no, id, password from member
            where id= '$id'";

            // 쿼리 실행
    $result=$conn->query($sql);
    //bd에서 들어온 값 db_pw 변수에 저장    
    $db_pw=mysqli_fetch_assoc($result);
    // echo"html에서 넘어온 값";
    // echo"db에서 넘어온 값";
    // print_r($db_pw);
    //db pw가 null인경우 
    if($db_pw == null){
            echo "이메일이 존재하지 않습니다.";
        } else{
            //비밀번호가맞는지 확인
            if($pw==$db_pw['password']){
                $_SESSION['no']=$db_pw['no'];
                $_SESSION['id']=$db_pw['id'];               
                echo "
                <script>
                    location.href='./main.php';
                </script> 
                ";
                
            } else  {
                echo "패스워드가 맞지 않습니다.!";
            }
        }

    include('C:\xampp\htdocs\webfolders\spongebob\view\login.html');

?>
