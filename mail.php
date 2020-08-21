<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message']; 
    $to = 'ykl.91@hotmail.com'; 
    $subject = 'New Form Submission';
    $human = $_POST['human'];
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit'] && $human == '4') {				 
        if (mail ($to, $subject, $body)) { 
	    echo '<p>Your message has been sent!</p>';
	} else { 
	    echo '<p>Something went wrong, go back and try again!</p>'; 
	} 
    } else if ($_POST['submit'] && $human != '4') {
	echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
    // $formcontent="From: $name \n Message: $message";
    // $recipient = "ykl.91@hotmail.com";
    // $subject = "New Form Submission";
    // $mailheader = "From: $email \r\n";
    // mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    // echo "Thank You!";

    // $email_from = 'ykl.91@hotmail.com';

    // $email_message = "New Form Submission";

    // $email_body = "User Name: $name.\n".
    //                 "User Email: $email.\n".
    //                     "User Message: $message.\n";

    // $to = "ykl.91@hotmail.com";

    // $headers = "From: $email_from \r\n";

    // $headers .= "Reply-To: $email \r\n";

    // mail($to,$email_message,$email_body,$headers);

    // header("Location: index.html");

    // if (isset($_POST['submit'])){
    //     $name = $_POST['name'];
    //     $mailFrom = $_POST['email'];
    //     $message = $_POST['message'];

    //     $mailTo = "ykl.91@hotmail.com";
    //     $headers = "From: ".$mailFrom;
    //     $txt = "You have received an email from ".$name.".\n\n".$message;

    //     mail($mailTo, $subject, $txt, $headers);
    //     header("Location: index.php?mailsend");
    // }


?>