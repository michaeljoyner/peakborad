import structure from "./structure";

export default class Lightbox {
  constructor(articleEl) {
    let lightbox = document.createElement("div");
    lightbox.classList.add("pk-lightbox");
    lightbox.innerHTML = structure;

    this.article = articleEl;
    this.lightbox = lightbox;
    this.article_images = [].slice.call(
      document.querySelectorAll(".article-content img")
    );
    this.gallery_image_ids = [];
    this.current_index = 0;
    this.is_open = false;
  }

  init() {
    this.createGalleryImages();
    this.article.appendChild(this.lightbox);
    this.setDataAttributes();
    this.setControlListeners();
    this.setImageListeners();
  }

  createGalleryImages() {
    this.article_images.forEach((img, index) => {
      const gallery_image = new Image();
      gallery_image.src = img.src;
      gallery_image.classList.add("gallery-image");
      gallery_image.setAttribute("id", `gallery-img-${index + 1}`);
      this.gallery_image_ids.push(index + 1);

      this.lightbox.appendChild(gallery_image);
    });
  }

  setDataAttributes() {
    this.article_images.forEach((img, id) =>
      img.setAttribute("data-img-id", id + 1)
    );
  }

  setControlListeners() {
    const close_btn = this.lightbox.querySelector(".close-lightbox");
    close_btn.addEventListener("click", () => this.closeLightbox());

    const next = this.lightbox.querySelector(".lightbox-arrow.next");
    next.addEventListener("click", () => this.showNextImage());

    const prev = this.lightbox.querySelector(".lightbox-arrow.prev");
    prev.addEventListener("click", () => this.showPrevImage());

    document.body.addEventListener("keyup", ({ keyCode }) =>
      this.handleKeyPress(keyCode)
    );
  }

  setImageListeners() {
    this.article_images.forEach(img => {
      const img_id = img.getAttribute("data-img-id");
      img.addEventListener("click", () => {
        this.openLightbox(img_id);
      });
    });
  }

  openLightbox(pos) {
    this.current_index = this.gallery_image_ids.indexOf(parseInt(pos));
    this.is_open = true;
    this.showSelectedImage();
  }

  closeLightbox() {
    this.lightbox.classList.remove("open");
    this.is_open = false;
  }

  showNextImage() {
    if (this.current_index < this.gallery_image_ids.length - 1) {
      this.current_index++;
    } else {
      this.current_index = 0;
    }

    this.showSelectedImage();
  }

  showPrevImage() {
    if (this.current_index > 0) {
      this.current_index--;
    } else {
      this.current_index = this.gallery_image_ids.length - 1;
    }

    this.showSelectedImage();
  }

  showSelectedImage() {
    this.clearImageClasses();

    this.currentImage().classList.add("selected");

    this.lightbox.classList.add("open");
  }

  currentImage() {
    const id = this.gallery_image_ids[this.current_index];
    const selected_image = this.lightbox.querySelector(`#gallery-img-${id}`);

    return selected_image;
  }

  clearImageClasses() {
    const gallery_images = [].slice.call(
      this.lightbox.querySelectorAll(".gallery-image")
    );
    gallery_images.forEach(gall_img => gall_img.classList.remove("selected"));
  }

  handleKeyPress(keyCode) {
    if (!this.is_open) {
      return;
    }
    switch (keyCode) {
      case 27:
        this.closeLightbox();
        break;
      case 37:
        this.showPrevImage();
        break;
      case 39:
        this.showNextImage();
        break;

      default:
        break;
    }
  }
}
