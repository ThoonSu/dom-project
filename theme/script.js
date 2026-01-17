const themeToggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

// Apply the stored theme on initial load
if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
}

// Theme toggle logic
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Save the user's preference in localStorage
  const theme = document.body.classList.contains("dark-theme")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
});
