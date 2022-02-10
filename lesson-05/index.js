const player = document.getElementById("player");
const monster = document.getElementById("monster");

gsap.set(player, { xPercent: -50, yPercent: -50 });
// set start position;
gsap.set(monster, { xPercent: -50, yPercent: -50 });

//starting position
const playerPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const monsterPos = { x: 0, y: 0};

const mouse = { x: playerPos.x, y: playerPos.y };

const playerSpeed = 1; // slows down
const monsterSpeed = 0.01; // slows down

const xSetPlayer = gsap.quickSetter(player, "x", "px");
const ySetPlayer = gsap.quickSetter(player, "y", "px");

const xSetMonster = gsap.quickSetter(monster, "x", "px");
const ySetMonster = gsap.quickSetter(monster, "y", "px");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("keydown", () => animateMonster());

const speedAdjuster = (speed) => {
  let dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
  return dt;
};

gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  playerPos.x += (mouse.x - playerPos.x) * speedAdjuster(playerSpeed);
  playerPos.y += (mouse.y - playerPos.y) * speedAdjuster(playerSpeed);

  xSetPlayer(playerPos.x);
  ySetPlayer(playerPos.y);
});

const animateMonster = () => {
  console.log('Release the kraken!', gsap.ticker)
  gsap.ticker.add(() => {
    monsterPos.x += (mouse.x - monsterPos.x) * speedAdjuster(monsterSpeed);
    monsterPos.y += (mouse.y - monsterPos.y) * speedAdjuster(monsterSpeed);

    xSetMonster(monsterPos.x);
    ySetMonster(monsterPos.y);
  });
};
