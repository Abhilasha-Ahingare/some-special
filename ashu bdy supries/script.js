let currentScreen = 1;
const totalScreens = 5;

// Birthday emojis for background
const birthdayEmojis = [
  "🎂",
  "ashu",
  "🎉",
  "🎈",
  "ashu",
  "🎁",
  "🌟",
  "love",
  "✨",
  "💖",
  "bestu",
  "🎊",
  "🥳",
  "🎀",
];

// Create floating emojis
function createFloatingEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "floating-emoji";
  emoji.textContent =
    birthdayEmojis[Math.floor(Math.random() * birthdayEmojis.length)];
  emoji.style.left = Math.random() * 100 + "%";
  emoji.style.animationDuration = Math.random() * 3 + 5 + "s";
  emoji.style.animationDelay = Math.random() * 2 + "s";

  const emojiBg = document.getElementById("emojiBg");
  if (emojiBg) {
    emojiBg.appendChild(emoji);

    // Remove emoji after animation
    setTimeout(() => {
      if (emoji.parentNode) {
        emoji.parentNode.removeChild(emoji);
      }
    }, 8000);
  }
}

// Create emojis continuously
setInterval(createFloatingEmoji, 800);

// Update progress bar
function updateProgress() {
  const progress = (currentScreen / totalScreens) * 100;
  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    progressBar.style.width = progress + "%";
  }
}

// Next screen function
function nextScreen() {
  const currentScreenElement = document.getElementById(
    `screen${currentScreen}`
  );
  if (currentScreenElement) {
    currentScreenElement.classList.remove("active");
  }

  currentScreen++;
  if (currentScreen <= totalScreens) {
    setTimeout(() => {
      const nextScreenElement = document.getElementById(
        `screen${currentScreen}`
      );
      if (nextScreenElement) {
        nextScreenElement.classList.add("active");
        updateProgress();
      }
    }, 300);
  }
}

// Celebrate function with extra effects
function celebrate() {
  // Create burst of emojis
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createFloatingEmoji(), i * 100);
  }

  setTimeout(() => {
    nextScreen();
  }, 1000);
}

// Restart function
function restart() {
  const currentScreenElement = document.getElementById(
    `screen${currentScreen}`
  );
  if (currentScreenElement) {
    currentScreenElement.classList.remove("active");
  }

  currentScreen = 1;
  const firstScreen = document.getElementById("screen1");
  if (firstScreen) {
    firstScreen.classList.add("active");
    updateProgress();
  }
}

// Initialize progress bar
updateProgress();

// Add some initial floating emojis
for (let i = 0; i < 5; i++) {
  setTimeout(createFloatingEmoji, i * 1000);
}

// Keyboard navigation
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight" || e.key === " ") {
    if (currentScreen < totalScreens) {
      nextScreen();
    } else if (currentScreen === totalScreens) {
      restart();
    }
  }
});

// Prevent right-click context menu for better experience
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});


window.addEventListener("load", function() {
    const music = document.getElementById("bgMusic");
    music.muted = false;
    music.play();
  });