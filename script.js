function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}

function loadApp(url) {
  const iframe = document.getElementById("modal-iframe");
  const modal = document.getElementById("modal-overlay");
  iframe.src = url;
  modal.classList.remove("modal-hidden");
}

function closeApp() {
  const iframe = document.getElementById("modal-iframe");
  const modal = document.getElementById("modal-overlay");
  iframe.src = "";
  modal.classList.add("modal-hidden");
}
