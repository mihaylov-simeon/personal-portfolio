<?php
// Validate and sanitize input data
$name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';
$subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';

// Validate input fields
$errors = [];
if (empty($name)) {
    $errors[] = "Please enter your name.";
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Please enter a valid email address.";
}
if (empty($subject)) {
    $errors[] = "Please enter a subject.";
}
if (empty($message)) {
    $errors[] = "Please enter a message.";
}

// If there are validation errors, display them and exit
if (!empty($errors)) {
    foreach ($errors as $error) {
        echo "<div class='error_message'>$error</div>";
    }
    exit;
}

// Construct email content
$content = "From: $name \nSubject: $subject \nEmail: $email \nMessage: $message";

// Set recipient email address
$recipient = "simeon.s.mihaylov@gmail.com";

// Set email headers
$mailheader = "From: $email \r\n";
$mailheader .= "Reply-To: $email \r\n";
$mailheader .= "MIME-Version: 1.0 \r\n";
$mailheader .= "Content-type: text/plain; charset=utf-8 \r\n";

// Send email
if (mail($recipient, $subject, $content, $mailheader)) {
    echo "Thank you for contacting Matsmart Electricity & Engineering! Your message has been sent. We will get back to you soon.";
} else {
    echo "Error: Unable to send the message. Please try again later.";
}
?>
