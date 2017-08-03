<?php

require_once 'dbconfig.php';

if($_POST)
{
   $user_name 		= $_POST['user_name'];
   $user_password 	= $_POST['password'];
	
	//password_hash see : http://www.php.net/manual/en/function.password-hash.php
	$password 	= password_hash( $user_password, PASSWORD_BCRYPT, array('cost' => 11));
	
    try
    {
        $stmt = $db_con->prepare("SELECT * FROM users WHERE username=:uname");
        $stmt->execute(array(":uname"=>$user_name));
        $count = $stmt->rowCount();
		
        if($count==1){         
            echo "exist";
        }
        else{
            echo "1"; //  not available
        }

    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
}

?>