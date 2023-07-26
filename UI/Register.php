<?php
session_start();
include_once 'db.php';
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = ($_POST['pass']);
$cpassword = ($_POST['cpass']);
$verification_status = '0';

if(!empty($fname) && !empty($lname) && !empty($email) && !empty($phone) && !empty($password) && !empty($cpassword)){

    if(filter_var($email,FILTER_VALIDATE_EMAIL)){

        $sql = mysqli_query($conn,"SELECT email FROM Elitte WHERE email = '{$email}'");
        if(mysqli_num_rows($sql)>0){
            echo "$email ~ Already Exists";
        }
        else{

            if($password == $cpassword){

                if(isset($_FILES['image'])){
                    $img_name = $_FILES['image']['name'];
                    $img_typ = $_FILES['image']['type'];
                    $tmp_name = $_FILES['image']['tmp_name'];
                    $img_explode = explode('.',$img_name);
                    $img_extension = end($img_explode);
                    $extensions = ['png','jpeg','jpg'];


                    if(in_array($img_extension,$extensions) === true){
                        $time = time();
                        $newimagename = $time.$img_name;
                        if(move_uploaded_file($tmp_name, "./".$newimagename))
                        {
                            $random_id = rand(time(),10000000);
                            $otp = mt_rand(1111,9999);

                            $sql2 = mysqli_query($conn,"INSERT INTO users (unique_id, fname, lname, email, phone, password, image, otp, verification_status)
                            VALUES ({$random_id},'{$fname}','{$lname}','{$email}','{$phone}','{$password}','{$newimagename}','{$otp}','{$verification_status}')");
                            if($sql2){
                                $sql3= mysqli_query($conn , "SELECT * FROM users WHERE email = '{$email}'");
                                if(mysqli_num_rows($sql3)>0){
                                    $row = mysqli_fetch_assoc($sql3);
                                    $_SESSION['unique_id']=$row['unique_id'];
                                    $_SESSION['email']=$row['email'];
                                    $_SESSION['otp']=$row['otp'];
                                    

                                    


                                    if($otp){
                                        $to = $email;
                                        $subject = "Verify Your Email";
                                        $body = "Mr/Mrs "."$fname $lname \n "."Your Verification code is"." $otp";
                                        $headers = "From:noreply@gmail.com ";
                                        $mail_sent =mail($to, $subject, $body, $headers);

                                        if($mail_sent==true){
                                            echo "success";
                                        }
                                        else{
                                            echo "Email Problem!" . mysqli_error($conn);
                                        }
                                    }




                                }
                            }
                            else{
                                echo "Somethings went Wrong!";
                            }
                        }
                    }
                    else{
                        echo "Please Select an Profile Image -JPG, PNG, JPEG";
                    }
                }
                else{
                    echo "Please Select an Profile Image";
                }
            }
            else{
                echo "Confirm Password Don't Match";
            }
        }
    }
    else{
        echo "$email ~ This is not a Valid Email";
    }
}
else{
    echo "All Input Fields are Required";
}
?>
