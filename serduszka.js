// Falling hearts with intensity support.
const intensity = document.body.dataset.hearts || "normal";

function spawnHeart(opts = {}) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  // Random horizontal start
  heart.style.left = (Math.random() * 90 + 2) + "vw";

  // Size variation
  const size = opts.size || Math.floor(Math.random() * 30 + 24);
  heart.style.fontSize = size + "px";

  // Opacity: less transparent means higher opacity value
  heart.style.opacity = typeof opts.opacity === "number" ? opts.opacity : 0.7;

  // Random fall duration
  const duration = opts.duration || Math.floor(Math.random() * 12 + 8); // seconds
  heart.style.animationDuration = duration + "s";

  // Slight horizontal sway via transform on creation
  heart.style.transform = `translateX(0) rotate(${Math.floor(Math.random() * 40 - 20)}deg)`;

  document.body.appendChild(heart);

  // Remove after animation completes (duration + small buffer)
  setTimeout(() => heart.remove(), duration * 1000 + 2000);
}

// Configure spawn rate based on intensity
let spawnInterval = 500; // ms
let spawnCount = 1;
let baseOpacity = 0.7;
if (intensity === "high") {
  spawnInterval = 150;
  spawnCount = 2; // spawn extra hearts each tick
  baseOpacity = 0.95; // less transparent
}

setInterval(() => {
  for (let i = 0; i < spawnCount; i++) {
    spawnHeart({ opacity: baseOpacity });
  }
}, spawnInterval);