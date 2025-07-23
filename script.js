// 🌗 Theme Toggle
function toggleTheme() {
  const html = document.documentElement; 
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "light" ? "dark" : "light");
}

// 🧪 Modal Launcher
function loadApp(url) {
  const overlay = document.getElementById("modal-overlay");
  const iframe = document.getElementById("modal-iframe");

  iframe.src = url;
  overlay.classList.remove("modal-hidden");
  overlay.classList.add("modal-visible");

  // Optional: disable background scroll
  document.body.style.overflow = "hidden";
}

// 🧼 Modal Closer
function closeApp() {
  const overlay = document.getElementById("modal-overlay");
  const iframe = document.getElementById("modal-iframe");

  iframe.src = "";
  overlay.classList.remove("modal-visible");
  overlay.classList.add("modal-hidden");

  // Re-enable scroll
  document.body.style.overflow = "auto";
}

// 🧠 Escape Key Support
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeApp();
  }
});
