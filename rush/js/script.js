// script.js
$(document).ready(function () {
  const particles = [];
  const particleCount = 30;

  // create particle
  for (let i = 0; i < particleCount; i++) {
    const $div = $('<div class="particle"></div>').appendTo("body");
    particles.push({
      el: $div,
      x: $(window).width() / 2,
      y: $(window).height() / 2,
    });
  }

  let mouseX = $(window).width() / 2;
  let mouseY = $(window).height() / 2;
  let mouseInside = false;

  $(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    mouseInside = true;
  });

  $(document).on("mouseleave", function () {
    mouseInside = false;
  });

  function animate() {
    particles.forEach((p, i) => {
      const speed = 0.05 + i * 0.01;
      if (mouseInside) {
        p.x += (mouseX - p.x) * speed;
        p.y += (mouseY - p.y) * speed;
        p.el.css({ display: "block", left: p.x + "px", top: p.y + "px" });
      } else {
        p.el.css("display", "none");
      }
    });
    requestAnimationFrame(animate);
  }

  animate();
});
