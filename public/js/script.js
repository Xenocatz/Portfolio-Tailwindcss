// navbar script
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// sidebar
const sidebar = document.querySelector("#side-drawer");
function openSide() {
  sidebar.classList.toggle("lg:left-0");
  sidebar.classList.toggle("left-[-350px]");
}
