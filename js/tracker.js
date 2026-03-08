const dots = new Map([
  ["name", document.getElementById("dot_1")],
  ["email", document.getElementById("dot_2")],
  ["id", document.getElementById("dot_3")],
  ["dept", document.getElementById("dot_4")],
]);
const form = document.querySelector("#apply-form form");

form.addEventListener("input", (event) => {
  console.log(`Changed: ${event.target.name} = ${event.target.value}`);
});

form.addEventListener("input", (event) => {
  const { target } = event;
  const dot = dots.get(target.name);

  const isActive =
    target.name === "dept" ? target.value !== "Select" : target.value !== "";

  dot.classList.toggle("active", isActive);
});
