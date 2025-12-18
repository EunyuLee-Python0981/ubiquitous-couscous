let level = 0;


const chances = [90, 80, 70, 60, 50, 40, 30, 20, 10, 1];


const levelEl = document.getElementById('level');
const barEl = document.getElementById('bar');
const chanceEl = document.getElementById('chance');
const logEl = document.getElementById('log');
const upgradeBtn = document.getElementById('upgradeBtn');
const resetBtn = document.getElementById('resetBtn');


function getChance(lv) {
return chances[Math.min(lv, chances.length - 1)];
}


function log(text) {
const div = document.createElement('div');
div.textContent = text;
logEl.prepend(div);
}


function updateUI() {
levelEl.textContent = `+${level}`;
const chance = getChance(level);
chanceEl.textContent = `Success Chance: ${chance}%`;
barEl.style.width = chance + '%';
}


upgradeBtn.addEventListener('click', () => {
const chance = getChance(level);
const roll = Math.random() * 100;


if (roll <= chance) {
level++;
log(`✅ Success! Upgraded to +${level}`);
} else {
level = Math.max(0, level - 1);
log(`❌ Failed! Downgraded to +${level}`);
}


updateUI();
});


resetBtn.addEventListener('click', () => {
level = 0;
log('🔄 Reset to +0');
updateUI();
});


updateUI();
