<?php

$errors = [];
$data = [];

if (empty($_POST['name'])) {
    $errors['name'] = 'Name is required.';
}

if (empty($_POST['lastname'])) {
    $errors['lastname'] = 'Last name is required.';
}

if (empty($_POST['email'])) {
    $errors['email'] = 'Email is required.';
}

if (empty($_POST['password'])) {
    $errors['password'] = 'Pssword is required.';
}

if (empty($_POST['dob'])) {
    $errors['dob'] = 'DOB is required.';
}

if (empty($_POST['age'])) {
    $errors['age'] = 'age is required.';
}

if (empty($_POST['ph no'])) {
    $errors['phno'] = 'phone number is required.';
}
 
if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
}

echo json_encode($data);
