window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => (loader.style.display = "none"), 500);
});

document.getElementById("year").textContent = new Date().getFullYear();
