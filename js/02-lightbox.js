import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector("ul.gallery");

const galleryImg = galleryItems.map((picture) => `<a class="gallery__item" href=${picture.original}>
<img class="gallery__image" src=${picture.preview} alt= "${picture.description}" />
</a>`).join("");
gallery.insertAdjacentHTML('beforeend', galleryImg);

new SimpleLightbox('.gallery a', {captionPosition:'outside',captionsData: 'alt', captionDelay:'250'});

