<?php

require_once 'dbconfig.php';

if($_POST)
{
    $user_name 		= $_POST['user_name'];
    $user_email 	= $_POST['user_email'];
    $user_password = $_POST['password'];

	//password_hash see : http://www.php.net/manual/en/function.password-hash.php
//	$password 	= password_hash( $user_password, PASSWORD_BCRYPT, array('cost' => 11));
    if ($user_name!="Your Name"&&$user_password!="Your password"){
    try
    {
        $stmt = $db_con->prepare("SELECT * FROM users WHERE username=:user_name");
        $stmt->execute(array(":user_name"=>$user_name));
        $count = $stmt->rowCount();

        if($count==0){
            $stmt = $db_con->prepare("INSERT INTO users(username,email,password) VALUES(:uname, :email, :pass)");
            $stmt->bindParam(":uname",$user_name);
            $stmt->bindParam(":email",$user_email);
            $stmt->bindParam(":pass",$user_password);

            if($stmt->execute())
            {
                echo "registered";
            }
            else
            {
                echo "Query could not execute !";
            }

        }
        else{
            echo "1"; //  not available
        }

    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
  }
}

?>
