console.log("lesson #4");

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const allBoxes = [box1, box2, box3, box4, box5];

const tl = gsap.timeline({ paused: true });
tl.add("shrink", 3);
tl.add("grow", 6);
tl.to(box1, { duration: 2, x: 300 });
tl.to(box2, { duration: 2, x: 150 });
tl.to(box2, { duration: 2, rotation: 135, scale: 3 });
tl.to(box1, { duration: 3, rotation: 360, scale: 0.5 });
tl.to([box3, box5], { duration: 4, x: 500 });
tl.to([box3, box4], { duration: 4, y: -500 });
tl.to(allBoxes, { scale: 0.5 }, "shrink");
tl.to(allBoxes, { scale: 4 }, "grow");

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const resumeButton = document.getElementById("resume");
const reverseButton = document.getElementById("reverse");
const restartButton = document.getElementById("restart");

playButton.onclick = () => tl.play();
pauseButton.onclick = () => tl.pause();
resumeButton.onclick = () => tl.resume();
reverseButton.onclick = () => tl.reverse();
restartButton.onclick = () => tl.restart();
