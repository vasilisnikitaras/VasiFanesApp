function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}

function loadApp(url) {
  const modal = document.getElementById("modal-overlay");
  const iframe = document.getElementById("modal-iframe");
  iframe.src = url;
  modal.classList.remove("modal-hidden");
}

function closeApp() {
  const modal = document.getElementById("modal-overlay");
  const iframe = document.getElementById("modal-iframe");
  iframe.src = "";
  modal.classList.add("modal-hidden");

  const grid = document.querySelector(".app-grid");
  if (grid) {
    grid.scrollIntoView({ behavior: "smooth" });
  }
}
