const chatBot = document.getElementById("chat-bot");
const container = document.getElementById("chat-bot-container");

const closeSvg =
  '<svg viewBox="0 -960 960 960" height="24px" width="24px"><path fill="white" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
const robotSvg =
  '<svg viewBox="0 -960 960 960" height="24px" width="24px" ><path fill="white" d="M160-360q-50 0-85-35t-35-85q0-50 35-85t85-35v-80q0-33 23.5-56.5T240-760h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-680v80q50 0 85 35t35 85q0 50-35 85t-85 35v160q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200v-160Zm242.5-97.5Q420-475 420-500t-17.5-42.5Q385-560 360-560t-42.5 17.5Q300-525 300-500t17.5 42.5Q335-440 360-440t42.5-17.5Zm240 0Q660-475 660-500t-17.5-42.5Q625-560 600-560t-42.5 17.5Q540-525 540-500t17.5 42.5Q575-440 600-440t42.5-17.5ZM320-280h320v-80H320v80Zm-80 80h480v-480H240v480Zm240-240Z"/></svg>';

chatBot.addEventListener("click", () => {
  container.classList.toggle("visible");
  container.classList.toggle("hidden");

  if (container.classList.contains("visible")) {
    chatBot.innerHTML = closeSvg;
  } else {
    chatBot.innerHTML = robotSvg;
  }
});
