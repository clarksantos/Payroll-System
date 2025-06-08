document.addEventListener('DOMContentLoaded', () => {
  // Check login
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }

  // Logout button actions
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

  // Sidebar menu navigation
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

  // Notification toggle
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

  // Add Employee Modal logic
  const addEmployeeBtn = document.getElementById("addEmployeeButton");
  const addEmployeeModal = document.getElementById("addEmployeeModal");
  const cancelAddEmployee = document.getElementById("cancelAddEmployee");

  if (addEmployeeBtn && addEmployeeModal && cancelAddEmployee) {
    addEmployeeBtn.addEventListener("click", () => {
      addEmployeeModal.style.display = "flex";
    });

    cancelAddEmployee.addEventListener("click", () => {
      addEmployeeModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === addEmployeeModal) {
        addEmployeeModal.style.display = "none";
      }
    });
  }
});

// Add Payroll Modal Logic
document.getElementById("addPayrollButton").addEventListener("click", () => {
  document.getElementById("payrollModal").style.display = "flex";
});

document.getElementById("closePayrollModal").addEventListener("click", () => {
  document.getElementById("payrollModal").style.display = "none";
});

document.getElementById("payrollForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Optional: Handle form submission here (e.g. add to table or send to backend)
  alert("Payroll added!");
  this.reset();
  document.getElementById("payrollModal").style.display = "none";
});


// Add Advance Modal Logic
document.getElementById("addAdvanceButton").addEventListener("click", () => {
  document.getElementById("advanceModal").style.display = "flex";
});

document.getElementById("closeAdvanceModal").addEventListener("click", () => {
  document.getElementById("advanceModal").style.display = "none";
});

document.getElementById("advanceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Optional: Append to table or process data
  alert("Advance added!");
  this.reset();
  document.getElementById("advanceModal").style.display = "none";
});

// Wait for DOM content to load before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openLeaveBtn');
  const modal = document.getElementById('LeaveModal');
  const closeBtn = document.getElementById('closeLeaveModal');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openOvertimeBtn');
  const modal = document.getElementById('OvertimeModal');
  const closeBtn = document.getElementById('closeOvertimeModal');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

/** Add User*/
document.getElementById("addUserButton").addEventListener("click", function () {
  document.getElementById("UserModal").style.display = "flex";
});

document.getElementById("closeUserModal").addEventListener("click", function () {
  document.getElementById("UserModal").style.display = "none";
});


/** End of add user */


document.getElementById("markAttendanceButton").addEventListener("click", function () {
  document.getElementById("AttendanceModal").style.display = "flex";
});

document.getElementById("closeAttendanceModal").addEventListener("click", function () {
  document.getElementById("AttendanceModal").style.display = "none";
});

document.getElementById("submitAttendance").addEventListener("click", function () {
  const name = document.getElementById("attendanceName").value;
  const date = document.getElementById("attendanceDate").value;
  const timeIn = document.getElementById("attendanceTimeIn").value;
  const timeOut = document.getElementById("attendanceTimeOut").value;

  if (!name || !date || !timeIn || !timeOut) {
    alert("Please fill in all required fields.");
    return;
  }

  // Example AJAX to PHP (adjust the path)
  fetch("submit_attendance.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, date, timeIn, timeOut, remarks: document.getElementById("attendanceRemarks").value })
  })
  .then(res => res.json())
  .then(data => {
    alert("Attendance marked successfully!");
    document.getElementById("AttendanceModal").style.display = "none";
  })
  .catch(err => {
    alert("Error submitting attendance.");
    console.error(err);
  });
});

// Report 

 document.getElementById("generateReportButton").addEventListener("click", function () {
  document.getElementById("ReportModal").style.display = "flex";
});

// Hide modal
document.getElementById("closeReportModal").addEventListener("click", function () {
  document.getElementById("ReportModal").style.display = "none";
});

// Handle Generate Report
document.getElementById("generateReportButton").addEventListener("click", function () {
  document.getElementById("ReportModal").style.display = "flex";
});

// Close Generate Report Modal
document.getElementById("closeReportModal").addEventListener("click", function () {
  document.getElementById("ReportModal").style.display = "none";
});

// Close View Report Modal
document.getElementById("closeViewReportModal").addEventListener("click", function () {
  document.getElementById("viewReportModal").style.display = "none";
});

// Handle Generate Report Submit
document.getElementById("generateReportSubmit").addEventListener("click", function () {
  const type = document.getElementById("modalReportType").value;
  const from = document.getElementById("modalReportDateFrom").value;
  const to = document.getElementById("modalReportDateTo").value;
  const dateNow = new Date().toLocaleDateString();

  const tbody = document.getElementById("reportTableBody");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${type.charAt(0).toUpperCase() + type.slice(1)} Report</td>
    <td>${dateNow}</td>
    <td>${type}</td>
    <td>Generated</td>
    <td><button class="save-btn view-btn" data-type="${type}" data-from="${from}" data-to="${to}" data-date="${dateNow}">View</button></td>
  `;
  tbody.appendChild(row);

  document.getElementById("ReportModal").style.display = "none";
});

// View Button Functionality
document.getElementById("reportTableBody").addEventListener("click", function (e) {
  if (e.target.classList.contains("view-btn")) {
    const type = e.target.getAttribute("data-type");
    const from = e.target.getAttribute("data-from");
    const to = e.target.getAttribute("data-to");
    const date = e.target.getAttribute("data-date");

    const details = `
      <strong>Type:</strong> ${type}<br>
      <strong>Date Range:</strong> ${from || "N/A"} to ${to || "N/A"}<br>
      <strong>Generated On:</strong> ${date}
    `;
    document.getElementById("reportDetails").innerHTML = details;
    document.getElementById("viewReportModal").style.display = "flex";
    document.getElementById("downloadPdfReport").addEventListener("click", function () {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      const content = document.getElementById("reportDetails").innerText;
    
      doc.text("Report Preview", 10, 10);
      doc.text(content, 10, 20);
      doc.save("report.pdf");
    });
    
  }
});