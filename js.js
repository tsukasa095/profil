function register(event) {
  event.preventDefault();
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.find((u) => u.username === username);
  if (exists) {
    alert("Username sudah terdaftar!");
    return false;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registrasi berhasil!");
  window.location.href = "index.html";
  return false;
}

function login(event) {
  event.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (validUser) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dasboard.html";
  } else {
    alert("Username atau password salah!");
  }
  return false;
}

function checkAuth() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    alert("Silakan login terlebih dahulu.");
    window.location.href = "index.html";
  } else {
    document.getElementById("username-display").textContent = user;
  }
}
