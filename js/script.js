// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const modalImage = document.getElementById("modalImage");

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            modalImage.src = this.getAttribute("data-src");
            const modal = new bootstrap.Modal(document.getElementById("imageModal"));
            modal.show();
        });
    });
});