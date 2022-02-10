console.log("lesson #3!");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");
const reverseButton = document.getElementById("reverse");
const restartButton = document.getElementById("restart");

const animate = gsap.timeline({ paused: true });
animate.add("shrink", 3);
animate.add("grow", 6);
animate.to(".translate-x-300", { duration: 2, x: 300 });
animate.to(".translate-x-150", { duration: 2, x: 150 });
animate.to(".bg-heliotrope", { duration: 2, rotation: 135, scale: 3 });
animate.to(".bg-orchid-crayola", { duration: 3, rotation: 360, scale: 0.5 });
animate.to(".translate-x-500", { duration: 4, x: 500 });
animate.to(".translate-y--500", { duration: 4, y: -500 });
animate.to(".box", { scale: 0.5 }, "shrink");
animate.to(".box", { scale: 8 }, "grow");

playButton.onclick = () => animate.play();
pauseButton.onclick = () => animate.pause();
resumeButton.onclick = () => animate.resume();
reverseButton.onclick = () => animate.reverse();
restartButton.onclick = () => animate.restart();
