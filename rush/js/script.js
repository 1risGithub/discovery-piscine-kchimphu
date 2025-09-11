const particles = [];
const particleCount = 30;

// create particle
for (let i = 0; i < particleCount; i++) {
  const div = document.createElement("div");
  div.className = "particle";
  document.body.appendChild(div);
  particles.push({
    el: div,
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
}

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let mouseInside = false;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  mouseInside = true;
});

document.addEventListener("mouseleave", () => {
  mouseInside = false;
});

function animate() {
  particles.forEach((p, i) => {
    const speed = 0.05 + i * 0.01;
    if (mouseInside) {
      p.x += (mouseX - p.x) * speed;
      p.y += (mouseY - p.y) * speed;
      p.el.style.display = "block";
      p.el.style.left = p.x + "px";
      p.el.style.top = p.y + "px";
    } else {
      p.el.style.display = "none";
    }
  });
  requestAnimationFrame(animate);
}

animate();
