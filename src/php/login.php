<?php
// Start the session
session_start();

require_once 'dbconfig.php';

if($_POST)
{
   $user_name 		= $_POST['user_name'];
   $user_password 	= $_POST['password'];

    try
    {
        $stmt = $db_con->prepare("SELECT * FROM users WHERE username=:uname AND password=:pass");
        $stmt->execute(array(":uname"=>$user_name, ":pass"=>$user_password));
        $count = $stmt->rowCount();

        if($count==1){
            echo "exist";
            $_SESSION["login_status"]=true;
        }
        else{
            echo "1"; //  not available
            $_SESSION["login_status"]=false;
        }

    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
}

?>
