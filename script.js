document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("oq0Ykp4EyDzT7vbhC"); // Replace with your EmailJS user ID
  
    document.getElementById('booking-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      emailjs.send("service_qwu27rl", "template_tp0c28m", {
        user_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        room: document.getElementById("room").value,
        checkin_date: document.getElementById("checkin_date").value,
        checkout_date: document.getElementById("checkout_date").value,
        requests: document.getElementById("requests").value
      })
      .then(function(response) {
         alert("Booking request sent successfully!", response.status, response.text);
      }, function(error) {
         alert("Failed to send booking request.", error);
      });
    });
  });
  