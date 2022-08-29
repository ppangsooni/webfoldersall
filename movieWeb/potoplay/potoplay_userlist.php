
<?php
     include ("../lib/dbconn.php");
    // if(!$userId){
    //     echo "
    //     <script>
    //         alert('비회원입니다.로그인하여주세요');
    //         window.location.href='../login/login_form.php';
    //     </script>
    //     ";
    //     exit;
    // } 
    $sql="SELECT * FROM potopaly_userlist";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);//연관배열 = [이름명]

    // $potopaly_userlist_number= $row['potopaly_userlist_number()'];

    // if(!$potopaly_userlist_number) {
    //     echo '제작하신 포토플레이 내역이 없습니다.';
    // };
 
?>

