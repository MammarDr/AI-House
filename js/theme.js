function saveThemePreference(theme) {
  localStorage.setItem("theme", theme);
}

const themeBtn = document.getElementById("theme");
const documentElement = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  documentElement.classList.add("dark");
} else {
  documentElement.classList.remove("dark");
}

themeBtn.addEventListener("click", () => {
  documentElement.classList.toggle("dark");
  if (documentElement.classList.contains("dark")) {
    saveThemePreference("dark");
  } else {
    saveThemePreference("light");
  }
});
