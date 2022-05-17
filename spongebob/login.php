<?php

    // phpinfo();
    // echo "hello world";
    // $tmp='hellohellohellohello';
    // echo "<br>";
    // echo "<script>alert('hello')</script>";
    // echo $tmp;  
    print_r($_POST);
    echo "<br><br><br>";
    print($_POST['username']);
    echo "<br><br><br>";
    print($_POST['password']);
    echo "<br><br><br>";


    include('db.php');
    $sql = "select
    name,
    age,
    sex,
    location
    from member
    where sex='남성'";

//쿼리에 대응하는 데이터는 $result안에
    $result= $conn ->query($sql);

    echo "row의 갯수";
    echo $result->num_rows;
    echo "<br><br><br>";
    while ($row = $result->fetch_array(MYSQLI_ASSOC)){
        print($row['name']);
        print($row['age']);
        print($row['sex']);
        print($row['location']);
        echo "<br>";    
    }

    // $row = $result->fetch_array(MYSQLI_ASSOC);
    // print($row['name']);
    // echo$conn;
    // if($conn){

    // }
?>
