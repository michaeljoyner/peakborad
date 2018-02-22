import Lightbox from "../js/lighbox/Lightbox";

if (document.querySelector(".article-content")) {
  let lightbox = new Lightbox(document.querySelector(".article-content"));
  lightbox.init();
}
