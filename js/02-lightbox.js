import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("\n");

galleryEl.insertAdjacentHTML("beforeend", markup);
new SimpleLightbox(".gallery a", {
  captioneType: "text",
  captionsData: "alt",
  captionDelay: 250,
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") close.SimpleLightbox;
});
