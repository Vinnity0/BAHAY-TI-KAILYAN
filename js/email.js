document.getElementById('sendEmailBtn').addEventListener('click', function() {
    // Define the parameters for the email
    const templateParams = {
        to_email: 'spdsheart@gmail.com', // Replace with recipient's email
        from_name: 'ako',
        message: 'This is the message you want to send.'
    };

    // Send the email using EmailJS
    emailjs.send('service_iqwd86f', 'template_1rzcfw5', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('Email sent successfully!');
        }, function(error) {
           console.error('FAILED...', error);
           alert('Failed to send email.');
        });
});