// her birthday date (YYYY-MM-DD)
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

// Local storage keys
const LAST_REVEAL_DATE_KEY = "lastRevealDate";
const SURPRISE_INDEX_KEY = "surpriseIndex";

// Balloon animation on birthday
function showBalloons() {
  if (new Date().toDateString() === birthday.toDateString()) {
    const balloonContainer = document.createElement("div");
    balloonContainer.classList.add("balloons-container");
    document.body.appendChild(balloonContainer);
    for (let i = 0; i < 4; i++) {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");
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
revealBtn.addEventListener("click", () => {
  const today = new Date().toDateString();
  const lastRevealDate = localStorage.getItem(LAST_REVEAL_DATE_KEY) || null;
  let surpriseIndex = parseInt(localStorage.getItem(SURPRISE_INDEX_KEY)) || 0;

  // Check if a surprise has already been revealed today
  if (today !== lastRevealDate) {
    if (surpriseIndex < surprises.length) {
      surpriseElement.textContent = surprises[surpriseIndex];
      surpriseElement.style.display = "block";

      // Update local storage
      localStorage.setItem(LAST_REVEAL_DATE_KEY, today);
      localStorage.setItem(SURPRISE_INDEX_KEY, surpriseIndex + 1);
    } else {
      surpriseElement.textContent = "No more surprises, but I love you! ❤️";
      revealBtn.disabled = true; // Disable button when all surprises are revealed
    }
  } else {
    surpriseElement.textContent = "You've already revealed today's surprise! Come back tomorrow. 😊";
  }
});

// Initial setup
updateCountdown();
