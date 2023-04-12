<?php
// Get the values from the form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the email headers
$headers = "From: ".mb_encode_mimeheader($name)." <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";

// Send the email
mail('customer-service@karpat-bazalt.com', mb_encode_mimeheader('Нове повідомлення'), $message, $headers);
?>