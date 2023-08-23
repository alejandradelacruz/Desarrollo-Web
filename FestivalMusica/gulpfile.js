const { src, dest, watch, parallel } = require("gulp"); 

//CSS
const sass = require("gulp-sass")(requiere('sass'));
const plumber = requiere("gulp-plumber");

//IMAGENES
const cache = requiere('gulp-cache');
const imagemin = requiere('gulp-imagemin');
const webp = requiere('gulp-webp');
const avif = requiere('gulp-avif');


//AUTOMATIZAR TAREAS 
function css(done) {
    //1. Identificar el archivo de SASS --src
    src('src/scss/**/*.scss')
    .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"));
    //2. Compilar las funciones de SASS

    //3. Almacenarla en el disco duro --dest
    done(); //Callback que avisa a gulp cuando llegamos al final
}

function imagenes(done){
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    done();
}

function versionWebp(done){
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();   
}

function versionAvif( done ) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( avif(opciones) )
        .pipe( dest('build/img') )
    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css)
    done();
}

function tarea (done) {
    console.log('Desde la primera tarea');
    done();
}

//Node js: Para mandar a llamar
exports.tarea = tarea;
exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, dev);
