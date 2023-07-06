document.getElementById("loginButton").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform validation (add your own logic here)
    if (username === "admin" && password === "password") {
      alert("Login successful!");
  
      // Redirect to the desired page
      window.location.href = "homepage.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  