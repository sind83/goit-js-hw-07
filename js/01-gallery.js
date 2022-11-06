import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector("div.gallery");

const galleryImg = galleryItems.map((picture) => `<div class="gallery__item">
<a class="gallery__link" href=${picture.original}>
<img class="gallery__image" src=${picture.preview} 
data-source=${picture.original} alt=${picture.description}/>
</a></div>`).join("");

gallery.insertAdjacentHTML('beforeend', galleryImg);

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    const properImg = event.target.nodeName;
    if(properImg!== 'IMG') return; 
    const bigPictureSource = event.target.getAttribute('data-source');
    basicLightbox.create(`
		<img src="${bigPictureSource}">`).show();
});

gallery.addEventListener("keydown", (event) => {
    const modal = document.querySelector("div.basicLightbox");
    
    if (modal && event.key == "Escape") {
        console.log("wow escape entered");
        modal.parentNode.removeChild(modal);
    }
});