const menuButton = document.querySelector(".menu-btn");
const navi = document.querySelector("nav");

menuButton.addEventListener("click", openMenu);

function openMenu(click) {
    navi.classList.toggle('hidden');
    menuButton.classList.toggle('change');
}