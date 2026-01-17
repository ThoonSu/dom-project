const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("input-form");
const errorElement = document.getElementById("error");

errorElement.style.display = "none";

form.addEventListener("submit", (e) => {
  const messages = [];

  // is username empty
  if (username.value === "" || username.value === null) {
    messages.push("- Username is required!");
  }

  // is password empty
  if (password.value === "" || password.value === null) {
    messages.push("- Password is required!");
  }

  // is password length less than 6?
  if (password.value && password.value.length < 6) {
    messages.push("- Password should be at least 6 characters!");
  }

  // is password length more than 20?
  if (password.value && password.value.length > 20) {
    messages.push("- Password should be no more than 20 characters!");
  }

  // is password value "Password"?
  if (password.value.toLowerCase() === "password") {
    messages.push("- Password cannot be <b>password</b>");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = messages.join("<br>");
    errorElement.style.display = "block";
  }
});
