// const sections =  Array.from(document.querySelectorAll("section"));
// const snapContainer = document.querySelector(".snap-container");

// const navigators = document.querySelectorAll("#navigator a");

// navigators.forEach((navigator) => {
//   navigator.addEventListener("click", (event) => {
//     event.preventDefault();
//     const target = event.currentTarget;
//     const href = target.getAttribute("href");
//     const section = document.querySelector(href);

//     if (section) {
//       snapContainer.scrollTo({
//         top: section.offsetTop - snapContainer.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   });
// });

// window.addEventListener("hashchange", () => {
//   const hash = window.location.hash;
//   if (hash) {
//     const section = document.querySelector(hash);
//     if (section) {
//       snapContainer.scrollTo({
//         top: section.offsetTop - snapContainer.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   }
// });

// let isScrolling = false;;
// snapContainer.addEventListener("wheel", (event) => {
//   event.preventDefault();
//   if (isScrolling) return;
//   isScrolling = true;

//   // Find the closest section to the current scroll position
//   const scrollTop = snapContainer.scrollTop;
//   let currentIndex = sections.findIndex(section => {
//     const sectionTop = section.offsetTop - snapContainer.offsetTop;
//     const sectionHeight = section.offsetHeight;
//     return scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight;
//   });

//   let targetIndex = currentIndex;
//   if (event.deltaY > 0 && currentIndex < sections.length - 1) {
//     targetIndex = currentIndex + 1;
//   } else if (event.deltaY < 0 && currentIndex > 0) {
//     targetIndex = currentIndex - 1;
//   }

//   if (targetIndex !== currentIndex) {
//     const targetSection = sections[targetIndex];
//     snapContainer.scrollTo({
//       top: targetSection.offsetTop - snapContainer.offsetTop,
//       behavior: "smooth",
//     });
//     window.location.hash = targetSection.id;
//     setTimeout(() => {
//       isScrolling = false;
//     }, 1000);
//   } else {
//     isScrolling = false;
//   }
// }, { passive: false });
