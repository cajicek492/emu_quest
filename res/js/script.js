const shopIcon = document.getElementById("shopIcon");
const settingsIcon = document.getElementById("settingsIcon");
const statsIcon = document.getElementById("statsIcon");
const shop = document.getElementById("shop");
const settings = document.getElementById("settings");
const restart = document.getElementById("restart");
const emu = document.getElementById("emu");
const healthBar = document.getElementById("healthBar");
const moneyCounter = document.getElementById("moneyCounter");
const fantasySword = document.getElementById("fantasySword");
const fantasySwordPriceCounter = document.getElementById("fantasySwordPriceCounter");
const fantasySwordLvlCounter = document.getElementById("fantasySwordLvlCounter");
const brek = document.getElementById("brek");
const bossHealthUp = document.getElementById("bossHealthUp");
const bossHealthPriceCounter = document.getElementById("bossHealthPriceCounter");
const bossHealthLvlCounter = document.getElementById("bossHealthLvlCounter");
const highpresure = new Audio();


let dmg = 0;
let money = 10;
let moneyDrop = 5;
let maxHealth = 100;
let health = maxHealth;
let fantasySwordPrice = 10;
let fantasySwordLvl = 0;
let bossHealthLvl = 0;
let bossHealthPrice = 75;

highpresure.src = "./res/audio/highpresure.mp3";
shopIcon.addEventListener("click", () => {
  toggleDisplay(shop)
});
settingsIcon.addEventListener("click", () => {
  toggleDisplay(settings);
});

document.addEventListener("click", () => {
  if (shop.style.display === "block" || settings.style.display === "block") {
    emu.style.display = "none";
    healthBar.style.display = "none";
    moneyCounter.style.display = "none";
  }
});
fantasySword.onclick = () => {
  upgradeFunction(fantasySwordPrice, fantasySwordLvl, fantasySwordLvlCounter, fantasySwordPriceCounter, 25, 5);
  console.log("koupenp");
}
bossHealthUp.onclick = () => {
  upgradeHealth(bossHealthPrice, bossHealthLvl, bossHealthLvlCounter, bossHealthPriceCounter);
}

function upgradeFunction(cena, elementLvl, elementLvlCounter, cenaCounter, cenaPlus, dmgPlus) {
  if (money >= cena) {
    money -= cena;
    moneyCounter.innerHTML = "Money: " + money;
    dmg += dmgPlus;
    elementLvl += 1;
    elementLvlCounter.innerHTML = "Lvl: " + elementLvl;
    cena += cenaPlus;
    cenaCounter.innerHTML = "Price: " + cena + "g";

    
    fantasySwordPrice = cena;
    fantasySwordLvl = elementLvl;
  }
}
function upgradeHealth(cena, elementLvl, elementLvlCounter, cenaCounter) {
  if (money >= cena) {
    money -= cena;
    moneyCounter.innerHTML = "Money: " + money;
    elementLvl++;
    elementLvlCounter.innerHTML = "Lvl: " + elementLvl;
    cena += 125;
    cenaCounter.innerHTML = "Price: " + cena + "g";
    healthBar.max += 200;
    healthBar.value = healthBar.max;
    maxHealth += 200;
    health = maxHealth;
    moneyDrop += 25;

    bossHealthPrice = cena;
    bossHealthLvl = elementLvl;
  }
}

function toggleDisplay(element) {
  brek.style.display = "none";
  if (element.style.display === "none") {
    element.style.display = "block";
    emu.style.display = "none";
    healthBar.style.display = "none";
    moneyCounter.style.display = "none";
  } else {
    element.style.display = "none";
    emu.style.display = "block";
    healthBar.style.display = "block";
    moneyCounter.style.display = "block";
  }
}
restart.onclick = () => {
  location.reload();
}
emu.addEventListener("click", () => {
  if (shop.style.display === "none") {
    health -= dmg;
    healthBar.value -= dmg;
    if (health <= 0) {
      health = maxHealth;
      healthBar.value = healthBar.max;
      money += moneyDrop;
      moneyCounter.innerHTML = "Money: " + money;
      highpresure.play();
    }
  }
});
function cheat() {
  money += 15000;
}
cheat();
/*function openWindow() {
    const url = 'stats.html';
    const features = 'width = 600,height = 400';
    const newWindow = window.open(url, 'New Window', features);
    statsIcon.addEventListener("click", () => {
  openWindow();
});
}*/
