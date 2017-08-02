<?php

  include 'database.php';
  $db = OpenCon();

 session_start();

  if($_SERVER["REQUEST_METHOD"] == "POST") {
      $_SESSION['Error'] = "You left one or more of the required fields.";
    // username and password sent from form

    $myusername = mysqli_real_escape_string($db,$_POST['usrname']);
    $mypassword = mysqli_real_escape_string($db,$_POST['pass']);

    $sql = "SELECT * FROM users WHERE username = '$myusername' and password = '$mypassword'";
    $result = mysqli_query($db,$sql);
    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
    //$active = $row['active'];

    $count = mysqli_num_rows($result);

    // If result matched $myusername and $mypassword, table row must be 1 row

    if($count == 1) {
      $_SESSION['login_user']= $myusername;
       //session_register("myusername");
       //   $_SESSION['login_user'] = $myusername;
       echo "<script>document.location='../pages/mainPage.php'</script>";
    //  header("location: ../index.php");
    }else {
		echo "<script>alert('Invalid username or password');document.location='../pages/mainPage.php'</script>";
	}
  }
;
?>
