<?php
require_once "../resources/PHPMailer/PHPMailerAutoload.php";
require_once 'dbconfig.php';

$user_name = $_POST['username'];
echo $user_name;
if (isset($user_name)&&$user_name!="Your name"){
  try{
    $stmt = $db_con->prepare("SELECT * FROM users WHERE username=:uname");
    $stmt->execute(array(":uname"=>$user_name));
    $rows = $stmt->fetch(PDO::FETCH_ASSOC);
    $email = $rows['email'];
    $password = $rows['password'];
  }
  catch(PDOException $e){
    echo $e->getMessage();
  }

  if (isset($email)){
    $mail = new PHPMailer;
    //Enable SMTP debugging.
    $mail->SMTPDebug = 3;
    //Set PHPMailer to use SMTP.
    $mail->isSMTP();
    //Set SMTP host name
    $mail->Host = "smtp.gmail.com";
    //Set this to true if SMTP host requires authentication to send email
    $mail->SMTPAuth = true;
    //Provide username and password
    $mail->Username = "newTestAccForKG@gmail.com";
    $mail->Password = "newTestAccForKG@gmail";
    //If SMTP requires TLS encryption then set it
    $mail->SMTPSecure = "tls";
    //Set TCP port to connect to
    $mail->Port = 587;

    $mail->From = "newTestAccForKG@gmail.com";
    $mail->FromName = "Keep Growing Team";

    $mail->addAddress($email, "Recepient Name");

    $mail->isHTML(true);

    $mail->Subject = "New Test Keep Growing";
    $mail->Body = "Here is your password - ".$password;
    $mail->AltBody = "Here is your password - ".$password;

    if(!$mail->send()){
      echo $mail->ErrorInfo;
    }
    else{
      echo "send";
    }
  }
  else {
    echo "wrong_email";
  }
}
else {
  echo "empty_name";
}
?>
