document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var dob = document.getElementById("dob").value;
    var phone = document.getElementById("phone").value.trim();
    var gender = document.getElementById("gender").value;
    var message = document.getElementById("message").value.trim();

    // Additional Validation
    var isValid = true;
    var validationMessage = "";

    // Email Validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        validationMessage += "Please enter a valid email address.\n";
    }

    // Length Validation (Example: Name should be between 2 and 50 characters)
    if (name.length < 2 || name.length > 50) {
        isValid = false;
        validationMessage += "Name must be between 2 and 50 characters.\n";
    }

    // Length Validation (Example: Message should be between 10 and 500 characters)
    if (message.length < 10 || message.length > 500) {
        isValid = false;
        validationMessage += "Message must be between 10 and 500 characters.\n";
    }

    // Character Set Validation (Example: Name should only contain letters and spaces)
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        isValid = false;
        validationMessage += "Name can only contain letters and spaces.\n";
    }

    // Phone Number Validation
    var phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number format
    if (!phoneRegex.test(phone)) {
        isValid = false;
        validationMessage += "Please enter a valid 10-digit phone number.\n";
    }

 
    if (!dob) {
        isValid = false;
        validationMessage += "Please select your date of birth.\n";
    }

    // Gender Validation
    if (!gender) {
        isValid = false;
        validationMessage += "Please select your gender.\n";
    }

    if (isValid) {
        // Simulate sending data to server (in this example, just displaying a confirmation message)
        var confirmationMessage = "Thank you, " + name + "! Your message has been sent.";
        alert(confirmationMessage);

        // Clear form fields after successful submission
        document.getElementById("contactForm").reset();
    } else {
        // Display validation errors to the user
        alert(validationMessage);
    }
});
