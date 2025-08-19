<?php
// Simple mail sender for contact form
// Expects POST fields: name, email, message

header('Content-Type: application/json');

// Basic required checks
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode([ 'ok' => false, 'error' => 'Method Not Allowed' ]);
  exit;
}

$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode([ 'ok' => false, 'error' => 'All fields are required.' ]);
  exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode([ 'ok' => false, 'error' => 'Invalid email address.' ]);
  exit;
}

$to = 'edano.cyreljane@gmail.com';
$subject = 'New Contact Message from ' . $name;

$bodyLines = [
  "You received a new contact message:",
  "",
  $message,
  "",
  "From: " . $name,
  "Email: " . $email
];
$body = implode("\n", $bodyLines);

// Additional headers
$headers = [
  'From: ' . $name . ' <' . $email . '>',
  'Reply-To: ' . $email,
  'X-Mailer: PHP/' . phpversion()
];

$success = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($success) {
  echo json_encode([ 'ok' => true ]);
} else {
  http_response_code(500);
  echo json_encode([ 'ok' => false, 'error' => 'Failed to send email. Check server mail configuration.' ]);
}

