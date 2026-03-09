const popup = document.getElementById("pop-up");
const popupContainer = document.querySelector("#pop-up .container");
const closeIcon = document.querySelector("#pop-up .close-icon");

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.style.cursor = "pointer";
    project.addEventListener("click", function () {
      if (!popup) return;

      const titleEl = project.querySelector(".description h2");
      const descriptionEl = project.querySelector(".description p");
      const imageEl = project.querySelector("img");

      const popupTitle = popup.querySelector(".card-title");
      const popupDescription = popup.querySelector(".card-description");
      const popupImage = popup.querySelector(".card-img");

      if (titleEl && popupTitle) {
        popupTitle.textContent = titleEl.textContent;
      }
      if (descriptionEl && popupDescription) {
        popupDescription.textContent = descriptionEl.textContent;
      }
      if (imageEl && popupImage) {
        popupImage.src = imageEl.src;
        popupImage.alt = imageEl.alt || "Project preview";
      }

      popup.classList.remove("hidden");
    });
  });
});

if (closeIcon && popup) {
  closeIcon.addEventListener("click", function () {
    popup.classList.add("hidden");
  });
}

if (popup) {
  popup.addEventListener("click", function () {
    popup.classList.add("hidden");
  });
}

if (popupContainer) {
  popupContainer.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}
