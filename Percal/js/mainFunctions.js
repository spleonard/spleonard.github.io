
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform validation (add your own logic here)
    if (username === "admin" && password === "password") {
      console.log("Login successful!");
  
      // Redirect to the desired page
      window.location.href = "./dashboard.html";
    } else {
      console.log("Invalid username or password. Please try again.");
    }
  });
  