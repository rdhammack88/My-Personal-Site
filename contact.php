<?php

if(isset($_POST['name'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = wordwrap($_POST['message']);
	$subject = "$name would like to work with you!";
	$headers = "From: $email";
	
	mail("directconnect@dustinhammack.com", $subject, $message, $headers);
}

header("Location: index.php");

?>