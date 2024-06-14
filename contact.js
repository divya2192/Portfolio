// Script.js 
document.getElementById("resumedownload").addEventListener("click", function () {
	var resumePath = "Divya_Londhe.pdf";
	window.open(resumePath, '_blank');
});
function validate() {
	// Prevent form submission
	event.preventDefault();

	// Get form field values
	const name = document.getElementById('name').value.trim();
	const phone = document.getElementById('phone').value.trim();
	const email = document.getElementById('email').value.trim();
	const message = document.getElementById('message').value.trim();

	// Get the error message element
	const errorMessage = document.getElementById('error_message');

	// Basic validation checks
	if (!name || !phone || !email || !message) {
		errorMessage.innerHTML = "All fields are required!";
		errorMessage.style.display = "block"; // Show the error message
		return false;
	} else if (!validateEmail(email)) {
		errorMessage.innerHTML = "Please enter a valid email address!";
		errorMessage.style.display = "block"; // Show the error message
		return false;
	} else if (!validatePhone(phone)) {
		errorMessage.innerHTML = "Please enter a valid phone number!";
		errorMessage.style.display = "block"; // Show the error message
		return false;
	} else {
		// Hide the error message if validation passes
		errorMessage.style.display = "none";
		// Submit the form or handle successful validation
		// For example, you might want to alert the user or submit via AJAX
		alert("Form submitted successfully!");
		return true; // Return true if you want to proceed with form submission
	}
}

// Email validation function
function validateEmail(email) {
	// Simple regex for email validation
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

// Phone number validation function
function validatePhone(phone) {
	// Simple regex for phone validation (you can adjust this as needed)
	const re = /^[0-9]{10}$/;
	return re.test(phone);
}

