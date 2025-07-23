function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}

function loadApp(url) {
<<<<<<< HEAD
  const modal = document.getElementById("modal-overlay");
  const iframe = document.getElementById("modal-iframe");
=======
  const iframe = document.getElementById("modal-iframe");
  const modal = document.getElementById("modal-overlay");
>>>>>>> 3e60ac2ab094a9fc8e7e47ebb51cf900edb0a76b
  iframe.src = url;
  modal.classList.remove("modal-hidden");
}

function closeApp() {
<<<<<<< HEAD
  const modal = document.getElementById("modal-overlay");
  const iframe = document.getElementById("modal-iframe");
  iframe.src = "";
  modal.classList.add("modal-hidden");

  const grid = document.querySelector(".app-grid");
  if (grid) {
    grid.scrollIntoView({ behavior: "smooth" });
  }
=======
  const iframe = document.getElementById("modal-iframe");
  const modal = document.getElementById("modal-overlay");
  iframe.src = "";
  modal.classList.add("modal-hidden");
>>>>>>> 3e60ac2ab094a9fc8e7e47ebb51cf900edb0a76b
}
