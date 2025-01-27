// Set her birthday date (YYYY-MM-DD)
const birthday = new Date("2025-01-31");
const countdownElement = document.getElementById("countdown");
const surpriseElement = document.getElementById("surprise");
const picturesElement = document.getElementById("pictures");
const revealBtn = document.getElementById("revealBtn");

// Array of surprises
const surprises = [
  "You make every day brighter! 🌟",
  "I love the way you smile. 😊",
  "Here's to more laughter and love together! 🎉",
  "I can't wait to celebrate with you! 🎂",
];

// Balloon animation on birthday
function showBalloons() {
  if (new Date().toDateString() === birthday.toDateString()) {
    const balloonContainer = document.createElement('div');
    balloonContainer.classList.add('balloons-container');
    document.body.appendChild(balloonContainer);
    for (let i = 0; i < 4; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloonContainer.appendChild(balloon);
    }
  }
}

// Calculate the days left
function updateCountdown() {
  const today = new Date();
  const diff = birthday - today;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
  
  if (daysLeft > 0) {
    countdownElement.textContent = `${daysLeft} day(s) until your birthday!`;
  } else if (daysLeft === 0) {
    countdownElement.textContent = "Happy Birthday Esther! 🎉";
    surpriseElement.style.display = "none";
    picturesElement.style.display = "block";
    revealBtn.disabled = true; // Disable the button on her birthday
    showBalloons(); // Show balloons on her birthday
  } else {
    countdownElement.textContent = "Your birthday has passed, but you deserve love every day!";
  }
}

// Reveal a surprise
let surpriseIndex = 0;
revealBtn.addEventListener("click", () => {
  const today = new Date();
  if (today.toDateString() !== birthday.toDateString()) { // Ensure it's not her birthday
    if (surpriseIndex < surprises.length) {
      surpriseElement.textContent = surprises[surpriseIndex];
      surpriseElement.style.display = "block";
      surpriseIndex++;
    } else {
      surpriseElement.textContent = "No more surprises, but I love you! ❤️";
    }
  }
});

// Initial setup
updateCountdown();