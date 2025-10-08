const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = document.querySelector("img");
const closeButton = document.querySelector(".close_viewer");

gallery.addEventListener("click", openModal);

function openModal(e) {
    
}

closeButton.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});