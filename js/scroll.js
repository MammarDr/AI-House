const navigators = document.querySelectorAll("#navigator a");

navigators.forEach((navigator) => {
  navigator.addEventListener("click", (event) => {
    const target = event.target;
    if (!target.classList.contains("checked")) {
      target.classList.add("checked");
    }

    for (const nav of navigators) {
      if (nav !== target) {
        nav.classList.remove("checked");
      }
    }
  });
});
