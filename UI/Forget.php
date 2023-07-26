<?php
session_start();
include_once 'db.php';
$email = $_POST['email'];
if( !empty($email)){

    if(filter_var($email,FILTER_VALIDATE_EMAIL)){

        $sql = mysqli_query($conn,"SELECT email FROM users WHERE email = '{$email}'");
        if(mysqli_num_rows($sql)>0){
        
                            $random_id = rand(time(),10000000);
                            $otp = mt_rand(1111,9999);
                            $sql2 = mysqli_query($conn,"UPDATE users SET `otp`='$otp' WHERE email='{$email}'");
                            
                                $sql3= mysqli_query($conn , "SELECT * FROM users WHERE email = '{$email}'");
                                if(mysqli_num_rows($sql3)>0){
                                    $row = mysqli_fetch_assoc($sql3);
                                    $_SESSION['email']=$row['email'];
                                    $_SESSION['otp']=$row['otp'];
                           

                                    


                                    if($otp){
                                        $to = $email;
                                        $subject = "Verify Your Email";
                                        $body = "Your Verification code to reset password is"." $otp";
                                        $headers = "From: noreply@gmail.com";
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
                                    echo "$email ~ Not Exists";
                                }
                            }
                                                     
                           
    
}

else{
    echo "All Input Fields are Required";
}

?>