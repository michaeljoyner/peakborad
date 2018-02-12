let mix = require("laravel-mix");
let tailwindcss = require("tailwindcss");
require("laravel-mix-purgecss");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
  .js("resources/js/app.js", "assets/")
  .sass("resources/sass/app.scss", "assets/")
  .options({
    postCss: [tailwindcss("tailwind.js")]
  })
  .purgeCss({
    globs: [
      path.join(__dirname, "assets/**/*"),
      path.join(__dirname, "layouts/**/*"),
      path.join(__dirname, "includes/**/*")
    ],
    extensions: ["html", "js", "md", "vue"]
  });
