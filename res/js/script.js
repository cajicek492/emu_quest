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
const highpresure = new Audio();


let dmg = 0;
let money = 10;
let maxHealth = 100;
let health = maxHealth;
let fantasySwordPrice = 10;
let fantasySwordLvl = 0;

highpresure.src = "./res/audio/highpresure.mp3";
shopIcon.addEventListener("click", () => {
  if (shop.style.display === "none") {
    shop.style.display = "block";
    emu.style.display = "none";
    healthBar.style.display = "none";
    moneyCounter.style.display = "none";
  } else {
    shop.style.display = "none";
    emu.style.display = "block"; 
    healthBar.style.display = "block";
    moneyCounter.style.display = "block";
  }
});
settingsIcon.addEventListener("click", () => {
  if (settings.style.display === "none") {
    settings.style.display = "block";
    emu.style.display = "none";
    healthBar.style.display = "none";
    moneyCounter.style.display = "none";
  } else {
    settings.style.display = "none";
    emu.style.display = "block";
    healthBar.style.display = "block";
    moneyCounter.style.display = "block";
  }
});
statsIcon.addEventListener("click",() => {
   openWindow();
});
fantasySword.onclick = () => {
if(money >= fantasySwordPrice){
  money -= fantasySwordPrice;
  moneyCounter.innerHTML = "Money: " + money;
  dmg += 5;
  fantasySwordLvl++;
  fantasySwordLvlCounter.innerHTML = "Lvl: " + fantasySwordLvl;
  fantasySwordPrice += 25;
  fantasySwordPriceCounter.innerHTML = "Price: " + fantasySwordPrice + "g";
  

}
}
emu.addEventListener("click", () => {
  health -= dmg;
   healthBar.value -= dmg;
   if (health <= 0){
    health = maxHealth;
    healthBar.value = healthBar.max;
    money += 5;
    console.log("kkt")
    moneyCounter.innerHTML = "Money: " + money;
    highpresure.play();
   }
   
});
restart.onclick = () => {
 
location.reload();

}
/*function openWindow() {
    const url = 'stats.html';
    const features = 'width = 600,height = 400';
    const newWindow = window.open(url, 'New Window', features);
}*/
