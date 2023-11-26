document.addEventListener('DOMContentLoaded', () => alert("i have a couple of full stack projects that are to be added in the site and cv but will be shown at interview"));

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
