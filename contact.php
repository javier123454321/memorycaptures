<!DOCTYPE HTML>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="css/master.css" media="screen" rel="stylesheet" type="text/css" />
</head>
<body>

<?php

    $visitor_name = "";
    $visitor_email = "";
    $email_title = "";
    $visitor_message = "";

    if(isset($_POST['name'])) {
        $visitor_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['mail'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['mail']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['subject'])) {
        $email_title = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    }
    //
    if(isset($_POST['message'])) {
        $visitor_message = "From: $visitor_name.<br><br>" ."Body: <br><br>" .wordwrap(htmlspecialchars($_POST['message']), 70);
    }

    $mailTo = "info@memorycaptures.com";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";

    if(mail($mailTo, $email_title, $visitor_message, $headers)){
      echo "<div class='formSuccess'><h1>Thank you for contacting us, $visitor_name. You will get a reply within 24 hours.</h1>";
      echo "<br><br><a href='http://memorycaptures.com' class='buttonStyle'> Go Back Home </a>
      </div>";
    }else{
      echo "<h1> Oops, something went wrong, please contact us at info@memorycaptures.com</h1>";
    }
?>

</body>
<style>

body{
  background-color: whitesmoke;
}
.formSuccess{
  background-color: white;
  border-radius: 200px;
  padding: 100px;
  margin: auto;
  margin-top: 15%;
  width:900px;
  max-width: 90%;
}

h1{
  color:#0abab5;
}

</style>
