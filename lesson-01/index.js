console.log("lesson 1!");
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  gsap.to(".title span", { duration: 3, opacity: 1 });
  gsap.to(".translate-x-300", { duration: 2, x: 300 });
  gsap.to(".translate-x-150", { duration: 2, x: 150 });
  gsap.to(".bg-heliotrope", { duration: 2, rotation: 135, scale: 3 });
  gsap.to(".bg-orchid-crayola", { duration: 3, rotation: 360, scale: 0.5 });
  gsap.to(".translate-x-500", { duration: 4, x: 500 });
  gsap.to(".translate-y--500", { duration: 4, y: -500 });
  button.textContent = `Run`
});
