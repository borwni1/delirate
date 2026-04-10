function loadNavbar() {
  fetch("/components/navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;
      renderUser();
    });
}

function renderUser() {
  const token = localStorage.getItem("token");
  const userArea = document.getElementById("userArea");

  if (!token) {
    userArea.innerHTML = `<a class="px-2" href="/login">Login</a>`;
    userArea.innerHTML += `<a class="px-2" href="/register">Register</a>`;
    return;
  }

  const payload = JSON.parse(atob(token.split(".")[1]));

  userArea.innerHTML = `
    <span style="color:white">Hi ${payload.username}</span>
    <button onclick="logout()">Logout</button>
  `;
}

function logout() {
  localStorage.removeItem("token");
  location.href = "/";
}

loadNavbar()