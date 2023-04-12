setTimeout(function () {
    $(document).ready(function () {
        $('form').submit(function (event) {
            // Prevent the form from submitting normally
            event.preventDefault();
            // Send the email
            sendEmail();
        });
    });
}, 1500);

function sendEmail() {
    // Get the values from the form
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    // Check that all fields are filled out
    if (name && email && message) {
        // Check that the email is valid
        if (validateEmail(email)) {
            // Send the data to the PHP script
            $.ajax({
                type: "POST",
                url: "send-email.php",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                success: function () {
                    // If the email was sent successfully, show a success message and reload the page
                     showAlert('success', 'Email sent.');
                    location.reload();
                },
                error: function () {
                    // If there was an error sending the email, show an error message
                    showAlert('error', 'Error sending email.');
                }
            });
        } else {
            // If the email is not valid, show an error message
            showAlert('info', 'Please enter a valid email address.');
        }
    } else {
        // If any fields are empty, show an error message
        showAlert('info', 'Please fill out all fields.');
    }
}

// Function to validate email address
function validateEmail(email) {
    var re = /\S+@\S+.\S+/;
    return re.test(email);
}
