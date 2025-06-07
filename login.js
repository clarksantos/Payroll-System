function login() {
    const password = document.getElementById("password").value;
    const correctPassword = "admin123"; 

    if (password === correctPassword) {
      sessionStorage.setItem("loggedIn", "true");  
      window.location.href = "dashboard.html";
      return false;
    } else {
      alert("Incorrect password.");
      return false;
    }
    
  }
  document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem("loggedIn") === "true") {
      // User already logged in, redirect to dashboard
      window.location.replace("dashboard.html");
    }
  });
  