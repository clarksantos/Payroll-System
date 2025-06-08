function login() {
  const password = document.getElementById("password").value;
  const correctPassword = "admin123";

  const errorMsg = document.getElementById("error-msg");

  if (password === correctPassword) {
    sessionStorage.setItem("loggedIn", "true");

    // Show loading animation or delay before redirect
    const loginBox = document.querySelector(".login-box");
    loginBox.innerHTML = "<p style='color:white;'>Logging in...</p>";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000); // 1 second delay

    return false;
  } else {
    errorMsg.textContent = "Incorrect password.";
    errorMsg.style.opacity = "1";

    // Fade out after 2 seconds
    setTimeout(() => {
      errorMsg.style.opacity = "0";
    }, 2000);

    return false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("loggedIn") === "true") {
    window.location.replace("dashboard.html");
  }
});
