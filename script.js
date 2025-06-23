document.addEventListener('DOMContentLoaded', function () {
    // Form and feedback element selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Form submission handler
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
    //declaring variables
    let isValid = true;
    const messages = [];

    //username validation
    if(username.length < 3) {
        isValid = false;
        messages.push = ("Username must be at least 3 characters long");
      }
      //email validation
      if(email.includes("@") || email.includes (".")) {
        messages.push("Email looks valid");
      } else{
        isValid = false;
        messages.push("Email must include '@' and '.' characters");
      }
      //password validation
      if(password.length < 8){
        isValid = false;
        messages.push("password must be at least 8 characters long");
  
      }

      feedbackDiv.style.display = "block";
       
      if (isValid){
        feedbackDiv.textxontent = "Registration successful";
        feedbackDiv.style.color = "#28a745";
      }else{
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545";
      }

    

        


    });



});