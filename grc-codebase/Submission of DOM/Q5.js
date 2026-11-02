"use strict";

// Create image gallery
document.body.innerHTML = `
    <h2>Image Gallery</h2>

    <div id="gallery"></div>

    <div id="modal">

        <span id="closeButton">&times;</span>

        <div id="modalContent">
            <img id="previewImage">
        </div>

    </div>
`;

// Select elements
const gallery = document.getElementById("gallery");

const modal = document.getElementById("modal");

const modalContent = document.getElementById("modalContent");

const previewImage = document.getElementById("previewImage");

const closeButton = document.getElementById("closeButton");

// Image URLs
const images = [
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1018/300/200",
    "https://picsum.photos/id/1020/300/200",
    "https://picsum.photos/id/1024/300/200",
    "https://picsum.photos/id/1035/300/200"
];

// Create gallery images
images.forEach(imageURL => {

    const image = document.createElement("img");

    image.src = imageURL;

    image.alt = "Gallery image";

    image.className = "galleryImage";

    gallery.appendChild(image);
});

// Add gallery styling
const style = document.createElement("style");

style.textContent = `
    #gallery {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        max-width: 700px;
    }

    .galleryImage {
        width: 100%;
        height: 150px;
        object-fit: cover;
        cursor: pointer;
    }

    #modal {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.85);
        justify-content: center;
        align-items: center;
    }

    #modalContent img {
        max-width: 80vw;
        max-height: 80vh;
    }

    #closeButton {
        position: absolute;
        top: 20px;
        right: 35px;
        color: white;
        font-size: 40px;
        cursor: pointer;
    }
`;

document.head.appendChild(style);

// Open modal on image click
gallery.addEventListener("click", function (event) {

    if (event.target.classList.contains("galleryImage")) {

        // Display bigger version of clicked image
        previewImage.src = event.target.src.replace(
            "/300/200",
            "/900/600"
        );

        modal.style.display = "flex";
    }
});

// Prevent closing when clicking inside modal
modalContent.addEventListener("click", function (event) {

    event.stopPropagation();
});

// Close modal when clicking outside content
modal.addEventListener("click", function () {

    modal.style.display = "none";
});

// Close button
closeButton.addEventListener("click", function () {

    modal.style.display = "none";
});