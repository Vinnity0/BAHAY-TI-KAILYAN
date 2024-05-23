 // Get all buttons with class 'sendEmailBtn'
 const buttons = document.querySelectorAll('.sendEmailBtn');
        
 // Attach click event listener to each button
 buttons.forEach(button => {
     button.addEventListener('click', function() {
         // Get the template ID associated with the clicked button
         const templateId = this.getAttribute('data-template-id');
         
         // Define the parameters for the email based on the clicked button
         const templateParams = {
             to_email: 'spdsheart@gmail.com', // Replace with recipient's email
             from_name: 'Please book This',
             message: `This is the message for Email ${templateId}.`
         };

         // Send the email using EmailJS with the corresponding template ID
         emailjs.send('your_service_id', templateId, templateParams)
             .then(function(response) {
                 console.log('SUCCESS!', response.status, response.text);
                 alert('Email sent successfully!');
             }, function(error) {
                 console.error('FAILED...', error);
                 alert('Failed to send email.');
             });
     });
 });