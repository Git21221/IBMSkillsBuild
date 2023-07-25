<?php

session_start();
include 'db.php';
$Email = $_POST['email'];
$Password = $_POST['pass'];
if(!empty($Email) || !empty($Password) || !empty($University_Roll_No)){
    $sql = mysqli_query($conn, "SELECT * FROM Elitte WHERE email = '{$Email}' AND password ='{$Password}'");
    if(mysqli_num_rows($sql)>0){
        
            $sql3= mysqli_query($conn , "SELECT * FROM Elitte WHERE email = '{$Email}'");
            if(mysqli_num_rows($sql3)>0){
                $row = mysqli_fetch_assoc($sql3);
                $_SESSION['email']=$row['email'];
                echo "success";    
            }
            else{
                echo "$Email ~ Not Exists";
            }
        
    }
    else{
        echo "Email or Password or ID No. is Incorrect";
    }
}
else{
    echo "All Fields Are Required!";
}
?>