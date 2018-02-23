/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_lighbox_Lightbox__ = __webpack_require__(2);


if (document.querySelector(".article-content")) {
  var lightbox = new __WEBPACK_IMPORTED_MODULE_0__js_lighbox_Lightbox__["a" /* default */](document.querySelector(".article-content"));
  lightbox.init();
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__structure__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Lightbox = function () {
  function Lightbox(articleEl) {
    _classCallCheck(this, Lightbox);

    var lightbox = document.createElement("div");
    lightbox.classList.add("pk-lightbox");
    lightbox.innerHTML = __WEBPACK_IMPORTED_MODULE_0__structure__["a" /* default */];

    this.article = articleEl;
    this.lightbox = lightbox;
    this.article_images = [].slice.call(document.querySelectorAll(".article-content img"));
    this.gallery_image_ids = [];
    this.current_index = 0;
    this.is_open = false;
  }

  _createClass(Lightbox, [{
    key: "init",
    value: function init() {
      this.createGalleryImages();
      this.setDataAttributes();
      this.setControlListeners();
      this.setImageListeners();
      this.addPageDots();
      this.article.appendChild(this.lightbox);
    }
  }, {
    key: "createGalleryImages",
    value: function createGalleryImages() {
      var _this = this;

      this.article_images.forEach(function (img, index) {
        var gallery_image = new Image();
        gallery_image.src = img.src;
        gallery_image.classList.add("gallery-image");
        gallery_image.setAttribute("id", "gallery-img-" + (index + 1));
        _this.gallery_image_ids.push(index + 1);

        _this.lightbox.appendChild(gallery_image);
      });
    }
  }, {
    key: "addPageDots",
    value: function addPageDots() {
      var dots_row = this.lightbox.querySelector(".lightbox-dots");
      this.article_images.forEach(function (img) {
        var dot = document.createElement("div");
        dot.className = "lightbox-dot";
        dots_row.appendChild(dot);
      });
    }
  }, {
    key: "setDataAttributes",
    value: function setDataAttributes() {
      this.article_images.forEach(function (img, id) {
        return img.setAttribute("data-img-id", id + 1);
      });
    }
  }, {
    key: "setControlListeners",
    value: function setControlListeners() {
      var _this2 = this;

      var close_btn = this.lightbox.querySelector(".close-lightbox");
      close_btn.addEventListener("click", function () {
        return _this2.closeLightbox();
      });

      var next = this.lightbox.querySelector(".lightbox-arrow.next");
      next.addEventListener("click", function () {
        return _this2.showNextImage();
      });

      var prev = this.lightbox.querySelector(".lightbox-arrow.prev");
      prev.addEventListener("click", function () {
        return _this2.showPrevImage();
      });

      document.body.addEventListener("keyup", function (_ref) {
        var keyCode = _ref.keyCode;
        return _this2.handleKeyPress(keyCode);
      });
    }
  }, {
    key: "setImageListeners",
    value: function setImageListeners() {
      var _this3 = this;

      this.article_images.forEach(function (img) {
        var img_id = img.getAttribute("data-img-id");
        img.addEventListener("click", function () {
          _this3.openLightbox(img_id);
        });
      });
    }
  }, {
    key: "openLightbox",
    value: function openLightbox(pos) {
      this.current_index = this.gallery_image_ids.indexOf(parseInt(pos));
      this.is_open = true;
      this.showSelectedImage();
    }
  }, {
    key: "closeLightbox",
    value: function closeLightbox() {
      this.lightbox.classList.remove("open");
      this.is_open = false;
    }
  }, {
    key: "showNextImage",
    value: function showNextImage() {
      if (this.current_index < this.gallery_image_ids.length - 1) {
        this.current_index++;
      } else {
        this.current_index = 0;
      }

      this.showSelectedImage();
    }
  }, {
    key: "showPrevImage",
    value: function showPrevImage() {
      if (this.current_index > 0) {
        this.current_index--;
      } else {
        this.current_index = this.gallery_image_ids.length - 1;
      }

      this.showSelectedImage();
    }
  }, {
    key: "showSelectedImage",
    value: function showSelectedImage() {
      this.clearImageClasses();

      this.currentImage().classList.add("selected");
      this.currentDot().classList.add("current");

      this.lightbox.classList.add("open");
    }
  }, {
    key: "currentImage",
    value: function currentImage() {
      var id = this.gallery_image_ids[this.current_index];
      var selected_image = this.lightbox.querySelector("#gallery-img-" + id);

      return selected_image;
    }
  }, {
    key: "currentDot",
    value: function currentDot() {
      var dots = [].slice.call(this.lightbox.querySelectorAll(".lightbox-dot"));
      return dots[this.current_index];
    }
  }, {
    key: "clearImageClasses",
    value: function clearImageClasses() {
      var gallery_images = [].slice.call(this.lightbox.querySelectorAll(".gallery-image"));
      gallery_images.forEach(function (gall_img) {
        return gall_img.classList.remove("selected");
      });

      var dots = [].slice.call(this.lightbox.querySelectorAll(".lightbox-dot"));
      dots.forEach(function (dot) {
        return dot.classList.remove("current");
      });
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(keyCode) {
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
  }]);

  return Lightbox;
}();

/* harmony default export */ __webpack_exports__["a"] = (Lightbox);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("\n        <div class=\"close-lightbox\">&times;</div>\n        <button class=\"lightbox-arrow next\">&rarr;</button>\n        <button class=\"lightbox-arrow prev\">&larr;</button>\n        <div class=\"lightbox-dots\"></div>\n");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);