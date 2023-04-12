<?php
// Get the values from the form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$tel = $_POST['tel'];
$category = $_POST['category'];

// Create the email body
$email_body = "<h3>Інформація про замовника:</h3>";
$email_body .= "<p><strong>Ім'я:</strong> $name</p>";
$email_body .= "<p><strong>Email:</strong> $email</p>";
$email_body .= "<p><strong>Телефон:</strong> $tel</p>";
$email_body .= "<p><strong>Категорія:</strong> $category</p>";
$email_body .= "<h3>Повідомлення:</h3>";
$email_body .= "<p>$message</p>";

// Set the email headers
$headers = "From: ".mb_encode_mimeheader($name)." <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";

// Send the email
mail('customer-service@karpat-bazalt.com', mb_encode_mimeheader('Нове повідомлення'), $email_body, $headers);
?>