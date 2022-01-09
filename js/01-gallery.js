import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("\n");

galleryEl.insertAdjacentHTML("beforeend", markup);
galleryEl.addEventListener("click", onClickPic);

function onClickPic(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) return;
  showBigImg(e);
}

function showBigImg(e) {
  const url = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${url}">`);
  instance.show();
  closeBigImageByEsc(instance);
}

function closeBigImageByEsc(inst) {
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") inst.close();
  });
}
