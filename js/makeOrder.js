$(document).ready(function () {
   var chosedCat;
    // відкриття модального вікна при кліку на кнопку
    $('.order-btn').click(function () {
       $('.modal').fadeIn();
        chosedCat = $(this).parent().find(".title-cat").html()
        $("#chosed_product").text(chosedCat);
    });

    // закриття модального вікна при кліку на кнопку "Закрити" або на overlay
    $('.modal-close').click(function () {
        $('.modal').css('display', 'none');
    });

    // відправлення форми за допомогою AJAX
    $('form').submit(function (event) {
        event.preventDefault();
        // Get the values from the form
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var tel = $('#tel').val();

        // Check that all fields are filled out
        if (name && email && message) {
            // Check that the email is valid
            if (validateEmail(email)) {
                // Send the data to the PHP script
                $.ajax({
                    type: "POST",
                    url: "/send-email2.php",
                    data: {
                        category: chosedCat,
                        name: name,
                        tel: tel,
                        email: email,
                        message: message

                    },
                    success: function () {
                        // If the email was sent successfully, show a success message and reload the page
                         showAlert('success', 'Дякуємо за ваше замовлення! Ми отримали ваш запит і найближчим часом звяжемося з вами для уточнення деталей.');
                        location.reload();
                    },
                    error: function () {
                        // If there was an error sending the email, show an error message
                      showAlert('error','Error sending email.');
                    }
                });
            } else {
                // If the email is not valid, show an error message
                 showAlert('info','Please enter a valid email address.');
            }
        } else {
            // If any fields are empty, show an error message
            showAlert('info','Please fill out all fields.');
        }
    });

    function validateEmail(email) {
        var re = /\S+@\S+.\S+/;
        return re.test(email);
    }
});
