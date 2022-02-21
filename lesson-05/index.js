const player = document.getElementById("player");
const monster = document.getElementById("monster");
const button = document.getElementById("button");

let MONSTER_IS_LOOSE = false;

// offset the pointer to be centered within the circle
gsap.set(player, { xPercent: -50, yPercent: -50 });
gsap.set(monster, { xPercent: -50, yPercent: -50 });

//starting position
const playerPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const monsterPos = { x: 0, y: 0 };

const mouse = { x: playerPos.x, y: playerPos.y };

const playerSpeed = 1; // slows down
const monsterSpeed = 0.05; // slows down

const xSetPlayer = gsap.quickSetter(player, "x", "px");
const ySetPlayer = gsap.quickSetter(player, "y", "px");

const xSetMonster = gsap.quickSetter(monster, "x", "px");
const ySetMonster = gsap.quickSetter(monster, "y", "px");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

button.onclick = () => {
  if (MONSTER_IS_LOOSE) {
    gsap.ticker.remove(monsterPosition);
    button.innerText = 'Set the Monster loose!';
    MONSTER_IS_LOOSE = false;
  } else {
    gsap.ticker.add(monsterPosition);
    button.innerText = 'Freeze the Monster!';
    MONSTER_IS_LOOSE = true;
  }
};

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

const monsterPosition = () => {
    monsterPos.x += (mouse.x - monsterPos.x) * speedAdjuster(monsterSpeed);
    monsterPos.y += (mouse.y - monsterPos.y) * speedAdjuster(monsterSpeed);
    xSetMonster(monsterPos.x);
    ySetMonster(monsterPos.y);
}