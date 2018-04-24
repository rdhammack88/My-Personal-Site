<?php

if(isset($_POST['name'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = wordwrap($_POST['message'], 70);
	$subject = "$name would like to work with you!";
	$headers = "From: $email";
	
	mail("directconnect@dustinhammack.com", $subject, $message, $headers);
	
	$return_subject = "Lets work together!";
	$return_message = wordwrap("Dear $name, \r\n\n\t Thank you for the interest in working with me to create the next big thing for the web. I'll be in touch with you soon. Looking forward to working together! \r\n\n Sincerely, \r\n\t Dustin Hammack", 70);
	$return_headers = "From: directconnect@dustinhammack.com";
	
	
	mail($email, $return_subject, $return_message);
}

header("Location: https://dustinhammack.com");

?>