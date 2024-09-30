function validateContactForm() {
  var email = document.getElementById("email").value;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

function validateBookingForm() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;

  var nameRegex = /^[A-Za-z\s]+$/;
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var phoneRegex = /^[0-9]{10}$/; 

  if (!nameRegex.test(fullName)) {
    alert("Please enter a valid name.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number (10 digits).");
    return false;
  }

  if (new Date(startDate) > new Date(endDate)) {
    alert("End date must be after the start date.");
    return false;
  }

  return true;
}
