const snapContainer = document.querySelector('.snap-container');
const navLinks = Array.from(document.querySelectorAll('#navigator a'));

const ACTIVE_SECTION_POINT = 0.45;

let isProgrammaticScroll = false;
let scrollEndTimer = null;

if (snapContainer && navLinks.length > 0) {
  const sectionMap = navLinks
    .map((nav) => {
      const href = nav.getAttribute('href');

      if (!href || !href.startsWith('#')) {
        return null;
      }

      const section = document.querySelector(href);

      if (!section) {
        return null;
      }

      return { nav, section };
    })
    .filter(Boolean);

  function getSectionTop(section) {
    const containerRect = snapContainer.getBoundingClientRect();
    const sectionRect = section.getBoundingClientRect();

    return sectionRect.top - containerRect.top + snapContainer.scrollTop;
  }

  function setActiveNav(activeNav) {
    if (!activeNav) return;

    navLinks.forEach((nav) => {
      nav.classList.toggle('checked', nav === activeNav);
    });
  }

  function updateNavigatorByScroll() {
    if (sectionMap.length === 0) return;

    const checkPoint = snapContainer.scrollTop + snapContainer.clientHeight * ACTIVE_SECTION_POINT;

    let activeNav = sectionMap[0].nav;

    for (const { nav, section } of sectionMap) {
      const sectionTop = getSectionTop(section);

      if (sectionTop <= checkPoint) {
        activeNav = nav;
      } else {
        break;
      }
    }

    setActiveNav(activeNav);
  }

  function finishProgrammaticScroll() {
    isProgrammaticScroll = false;
    updateNavigatorByScroll();
  }

  let ticking = false;

  function onContainerScroll() {
    if (ticking) return;

    ticking = true;

    requestAnimationFrame(() => {
      if (!isProgrammaticScroll) {
        updateNavigatorByScroll();
      }

      ticking = false;
    });

    if (isProgrammaticScroll) {
      clearTimeout(scrollEndTimer);

      scrollEndTimer = setTimeout(() => {
        finishProgrammaticScroll();
      }, 120);
    }
  }

  navLinks.forEach((nav) => {
    nav.addEventListener('click', (event) => {
      event.preventDefault();

      const href = nav.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const section = document.querySelector(href);
      if (!section) return;

      isProgrammaticScroll = true;

      setActiveNav(nav);

      snapContainer.scrollTo({
        top: getSectionTop(section),
        behavior: 'smooth',
      });

      history.replaceState(null, '', href);

      clearTimeout(scrollEndTimer);

      scrollEndTimer = setTimeout(() => {
        finishProgrammaticScroll();
      }, 900);
    });
  });

  snapContainer.addEventListener('scroll', onContainerScroll, {
    passive: true,
  });

  window.addEventListener('resize', updateNavigatorByScroll);

  updateNavigatorByScroll();
}
