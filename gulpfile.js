const { parallel, series } = require('gulp');
const gulpDev = require('./gulp/gulp.dev');
const gulpProd = require('./gulp/gulp.prod');

exports.dev = series(
  gulpDev.cleanBuild,
  parallel(
    gulpDev.html,
    gulpDev.styles,
    gulpDev.scripts,
    gulpDev.img,
    gulpDev.svgSprite,
    gulpDev.fonts,
    gulpDev.files,
    gulpDev.videos
  ),
  gulpDev.startServer,
  gulpDev.watching
);

exports.prod = series(
  gulpProd.cleanDist,
  parallel(
    gulpProd.html,
    gulpProd.styles,
    gulpProd.scripts,
    gulpProd.img,
    gulpProd.svgSprite,
    gulpProd.fonts,
    gulpProd.files,
    gulpProd.videos
  ),
  gulpProd.startServer,
  gulpProd.watching
);
