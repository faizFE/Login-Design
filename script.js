const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const icon = togglePassword.querySelector("i");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";

  // Ganti ikon
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
});
