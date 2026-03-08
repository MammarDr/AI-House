const sections = document.querySelectorAll("section");
const snapContainer = document.querySelector(".snap-container");

snapContainer.addEventListener("scrollend", () => {
  const scrollY = snapContainer.scrollTop;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - snapContainer.offsetTop;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute("id");
    const navigator = document.querySelector(`#navigator a[href="#${id}"]`);

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navigator?.classList.add("checked");
    } else {
      navigator?.classList.remove("checked");
    }
  });
});

const navigators = document.querySelectorAll("#navigator a");

navigators.forEach((navigator) => {
  navigator.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.currentTarget;
    const href = target.getAttribute("href");
    const section = document.querySelector(href);

    if (section) {
      snapContainer.scrollTo({
        top: section.offsetTop - snapContainer.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
