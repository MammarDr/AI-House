const snapContainer = document.querySelector(".snap-container");
const navigators = Array.from(document.querySelectorAll("#navigator a"));
const header = document.querySelector("header");
const HEADER_TOGGLE_OFFSET = 100;

if (snapContainer && navigators.length > 0) {
  const sectionMap = navigators
    .map((nav) => {
      const href = nav.getAttribute("href");
      if (!href || !href.startsWith("#")) {
        return null;
      }

      const section = document.querySelector(href);
      if (!section) {
        return null;
      }

      return { nav, section };
    })
    .filter(Boolean);

  function updateNavigator(target) {
    if (!target) {
      return;
    }

    navigators.forEach((nav) => nav.classList.remove("checked"));
    target.classList.add("checked");
  }

  function updateNavigatorByScroll() {
    const scrollTop = snapContainer.scrollTop;
    const containerHeight = snapContainer.clientHeight;
    const checkPoint = scrollTop + containerHeight * 0.4;

    let activeNav = sectionMap[0]?.nav;
    let smallestDistance = Number.POSITIVE_INFINITY;

    sectionMap.forEach(({ nav, section }) => {
      const sectionTop = section.offsetTop - snapContainer.offsetTop;
      const distance = Math.abs(checkPoint - sectionTop);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        activeNav = nav;
      }
    });

    updateNavigator(activeNav);
  }

  function updateHeaderByScroll() {
    if (!header) {
      return;
    }

    const scrollTop = snapContainer.scrollTop;

    if (scrollTop <= HEADER_TOGGLE_OFFSET) {
      header.classList.remove("header-hidden");
      return;
    }

    header.classList.add("header-hidden");
  }

  let isTicking = false;
  function onContainerScroll() {
    if (isTicking) {
      return;
    }

    isTicking = true;
    requestAnimationFrame(() => {
      updateNavigatorByScroll();
      updateHeaderByScroll();
      isTicking = false;
    });
  }

  navigators.forEach((navigator) => {
    navigator.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.currentTarget;
      const href = target.getAttribute("href");
      const section = href ? document.querySelector(href) : null;

      if (section) {
        snapContainer.scrollTo({
          top: section.offsetTop - snapContainer.offsetTop,
          behavior: "smooth",
        });
      }

      updateNavigator(target);
    });
  });

  snapContainer.addEventListener("scroll", onContainerScroll, {
    passive: true,
  });

  updateNavigatorByScroll();
  updateHeaderByScroll();
}
