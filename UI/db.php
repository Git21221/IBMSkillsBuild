<?php

$conn = new mysqli('loclhost','root','','usersform');
if(!$conn){
    echo "Connection SDenied!" . mysqli_connect_error();
}
?>
