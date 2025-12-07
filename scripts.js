// ---- STAR FIELD EFFECT ---- //
const starsContainer = document.getElementById("stars-container");
// console.log("Stars container found:", starsContainer);
const STAR_COUNT = 200;
const stars = [];

// Create stars
for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  const size = Math.random() * 3 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.opacity = Math.random();

  starsContainer.appendChild(star);

  stars.push({
    el: star,
    speed: Math.random() * 0.25 + 0.05,
  });
//   console.log("Star added", i);
}

// Animate floating stars
function animateStars() {
  stars.forEach((star) => {
    const top = parseFloat(star.el.style.top);
    star.el.style.top = (top + star.speed) % 100 + "%";
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// Mouse parallax effect
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  stars.forEach((star) => {
    const moveX = x * 20 * star.speed;
    const moveY = y * 20 * star.speed;
    star.el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
