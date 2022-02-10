console.log("task #2");
const playButton = document.getElementById("play");
const reverseButton = document.getElementById("reverse");

const tl = gsap.timeline();
tl.to(".translate-x-300", { duration: 2, x: 300 });
tl.to(".translate-x-150", { duration: 2, x: 150 });
tl.to(".bg-heliotrope", { duration: 2, rotation: 135, scale: 3 });
tl.to(".bg-orchid-crayola", { duration: 3, rotation: 360, scale: 0.5 });
tl.to(".translate-x-500", { duration: 4, x: 500 });
tl.to(".translate-y--500", { duration: 4, y: -500 });

playButton.onclick = () => tl.play();
reverseButton.onclick = () => tl.reverse();
