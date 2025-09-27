let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
const logo = document.getElementById("logo");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        pageContent.classList.add("dark")
        logo.src = "images/byui-logo_white.png"
    } else {
        // default
        pageContent.classList.remove("dark")
        logo.src = "images/byui-logo-blue.webp"
    }
}