const themeToggle = document.getElementById("theme");

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
