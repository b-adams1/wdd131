const menuButton = document.querySelector(".menu_button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } 
    else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

const newDialog = document.createElement("dialog");
newDialog.innerHTML = "<img><button class='close_viewer'>X</button>";
document.body.appendChild(newDialog);
const newCss = document.createElement("style");
newCss.innerHTML = `
img {
    width: 100%;
    max-width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    margin: 20vh auto; }
.close_viewer {
    position: absolute;
    top: 20vh;
    max-height: 100%;
    z-index: 10;}`

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImg = document.querySelector('img');
const closeButton = document.querySelector('.close_viewer');
function thingy(event) {
    event.target.closest('img')
}