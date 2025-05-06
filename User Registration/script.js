// Check which page we're on
if (document.getElementById("registrationForm")) {
  // Registration page code
  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value,
        timestamp: new Date().toISOString(),
      };

      // Save to local storage
      saveToLocalStorage(user);

      // Send via AJAX
      sendViaAJAX(user);

      // Reset form
      this.reset();

      // Notify user
      alert("Registration successful!");
    });

  function saveToLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    users.push(user);
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  }

  function sendViaAJAX(user) {
    // Using a mock API endpoint - in a real app, replace with your actual endpoint
    const url = "https://jsonplaceholder.typicode.com/users";

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 201) {
          console.log("User data sent successfully:", xhr.responseText);
        } else {
          console.error("Error sending user data:", xhr.statusText);
        }
      }
    };

    xhr.send(JSON.stringify(user));
  }
} else if (document.getElementById("usersList")) {
  // Users listing page code
  document.addEventListener("DOMContentLoaded", function () {
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const usersList = document.getElementById("usersList");

    if (users.length === 0) {
      usersList.innerHTML =
        '<tr><td colspan="4">No registered users found.</td></tr>';
      return;
    }

    usersList.innerHTML = users
      .map(
        (user) => `
            <tr>
                <td>${user.name || "N/A"}</td>
                <td>${user.email || "N/A"}</td>
                <td>${user.phone || "N/A"}</td>
                <td>${user.dob || "N/A"}</td>
            </tr>
        `
      )
      .join("");
  });
}
