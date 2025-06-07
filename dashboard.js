document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem("loggedIn") !== "true") {
      window.location.href = "login.html";
    }
    
    document.getElementById("logoutBtn").addEventListener("click", function () {
      document.getElementById("logoutModal").style.display = "flex";
    });
    
    document.getElementById("confirmLogout").addEventListener("click", function () {
      sessionStorage.removeItem("loggedIn");
      window.location.href = "login.html";
    });
    
    document.getElementById("cancelLogout").addEventListener("click", function () {
      document.getElementById("logoutModal").style.display = "none";
    });
    
    const menuLinks = document.querySelectorAll('.sidebar-menu a');
    const contentSections = document.querySelectorAll('.content-section');
    
    menuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
    
        menuLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    
        contentSections.forEach(section => section.classList.remove('active'));
    
        const targetId = link.getAttribute('data-section');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
        }
      });
    });
    
    const notifBtn = document.getElementById("notifBtn");
    const notifDropdown = document.getElementById("notifDropdown");
    
    notifBtn.addEventListener("click", () => {
      notifDropdown.style.display = notifDropdown.style.display === "block" ? "none" : "block";
    });
    
    window.addEventListener("click", (e) => {
      if (!notifBtn.contains(e.target) && !notifDropdown.contains(e.target)) {
        notifDropdown.style.display = "none";
      }
    });
  });
  