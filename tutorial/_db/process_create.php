<?php
//var_dump($_POST); 데이터가 잘 전송되엇는지 확인
    $conne=mysqli_connect("localhost","root","hye0","opentutorials");
    $sql = "
        INSERT INTO topic
            (title, description, created)
            VALUES(
                '{$_POST['title']}',
                '{$_POST['description']}',
                NOW()
            )
    ";
    // echo $sql;
    //ntutorials.org/course/3167/19587
    $reslt = mysqli_query($conne,$sql);
    if($result === false){
        echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요';
        error_log(mysqli_error($conn));
      } else {
        echo '성공했습니다. <a href="index.php">돌아가기</a>';
      }
    
    echo $sql;
?>