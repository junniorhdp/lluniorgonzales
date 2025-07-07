function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const usuarios = [
  { usuario: "admin", contraseña: "admin123", tipo: "admin" },
  { usuario: "usuario", contraseña: "usuario123", tipo: "usuario" },
  { usuario: "vendedor", contraseña: "vendedor123", tipo: "vendedor" }
];

  const encontrado = usuarios.find(u => u.usuario === username && u.contraseña === password);

if (encontrado) {
  if (encontrado.tipo === "admin") {
    window.location.href = "admin.html";
  } else if (encontrado.tipo === "usuario") {
    window.location.href = "user.html";
  } else if (encontrado.tipo === "vendedor") {
    window.location.href = "vendedor.html";
  }
} else {
  const error = document.getElementById("error");
  if (error) {
    error.textContent = "Usuario o contraseña incorrectos.";
  }
}

}
