const gulp = require('gulp');

const autoprefixer = require('autoprefixer');
const cleanCss = require('gulp-clean-css');
const clean = require('gulp-clean');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const todo = require('gulp-todo');
const sassdoc = require('sassdoc');
const argv = require('yargs').argv;
const size = require('gulp-size');
const rollup = require('gulp-rollup');
const git = require('gulp-git');
const gutil = require('gulp-util');

/*Object required to check if the project_folder exists when passed as an argument*/
let fs = require("fs");
let path = require('path');
/*css paths*/
let src_scss_project = 'online/' + argv.project + '/scss/project.scss';
let src_scss = 'online/' + argv.project + '/scss/**/*.scss';
let dist_css = 'online/' + argv.project + '/dist/css/';
/*js paths*/
let src_js_project = 'online/' + argv.project + '/js/project.js';
let src_js = 'online/' + argv.project + '/js/**/*.js';
let dist_js = 'online/' + argv.project + '/dist/js/';
/*docs paths*/
let dist_docs = 'online/' + argv.project + '/docs/';
let sassdocOptions = {
    dest: 'online/' + argv.project + '/docs/'
};

let sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

//Check If the Project Property has been entered and if the project exists.
function checkProject() {
    let dirCheck = fs.existsSync('online/');
    if (!dirCheck) {
        /*css paths*/
        src_scss_project = 'scss/project.scss';
        src_scss = 'scss/**/*.scss';
        dist_css = 'dist/css/';
        /*js paths*/
        src_js_project = 'js/project.js';
        src_js = 'js/**/*.js';
        dist_js = 'dist/js/';
        /*docs paths*/
        dist_docs = 'docs/';
        sassdocOptions = {
            dest: 'docs/'
        };
        let fileCheck = fs.existsSync('00-blog/');
        if (fileCheck) {
            src_scss = '**/*.scss';

        }
        return true;
    }
    if (!argv.project) {
        console.log("No file path has been provided. Please use \'gulp sass --project 001-ProjectName\'");
        console.log('ERROR  ---------------------------------------- The Project /' + argv.project + '/ does not exist. ------------------------------------ ERROR');
        return false;
    }
    let fileCheck = fs.existsSync('online/' + argv.project + '/');
    if (!fileCheck) {
        console.log('ERROR  ---------------------------------------- The Project /' + argv.project + '/ does not exist. ------------------------------------ ERROR');
    }
    fileCheck = fs.existsSync('online/' + argv.project + '/00-blog');
    if (fileCheck) {
        src_scss = 'online/' + argv.project + '/**/*.scss';
    }
    fileCheck = fs.existsSync('online/' + argv.project + '/');
    return fileCheck;
}

// Sass Task - Compile from /src/scss/project.scss to /dist/css/style.css
gulp.task('sass', function () {
    if (!checkProject()) {
        return false;
    }
    console.log('Turning /' + argv.project + '/ SCSS files into nicely compiled CSS with browser support prefixes - including .min.css and .map files.');
    return gulp
        .src(src_scss_project)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(rename("style.css"))
        .pipe(size({showFiles: true, showTotal: false}))
        .pipe(gulp.dest(dist_css))
        .pipe(cleanCss())
        .pipe(rename({suffix: ".min"}))
        .pipe(sourcemaps.write('.'))
        .pipe(size({showFiles: true, showTotal: false}))
        .pipe(gulp.dest(dist_css));
});


// Minify css Files.
gulp.task('minify-css', function () {
    if (!checkProject()) {
        return false;
    }
    return gulp
        .src([dist_css + '/**/*.css', '!' + dist_css + '/**/*min.css'])
        .pipe(plumber())
        .pipe(cleanCss())
        .pipe(rename({suffix: ".min"}))
        .pipe(size())
        .pipe(gulp.dest(dist_css));
});

// Compile TO DO List
gulp.task('todo', function () {
    if (!checkProject()) {
        return false;
    }
    return gulp
        .src(src_scss)
        .pipe(todo())
        .pipe(gulp.dest(dist_docs));
});

// Empty Dist/CSS Folder
gulp.task('clean-css', function () {
    if (!checkProject()) {
        return false;
    }
    return gulp
        .src(dist_css, {read: false})
        .pipe(clean({force: true}))
});


// Compile JS from Imports
gulp.task('bundle-js', function () {
    gulp.src(src_js_project)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(rollup({
            entry: src_js_project,
            allowRealFiles: true,
            format: 'es'
        }))
        /*.pipe(babel({
         presets: ['/node_modules/babel-preset-es2015']
         }))*/
        .pipe(rename("script.js"))
        .pipe(size({showFiles: true, showTotal: false}))
        .pipe(gulp.dest(dist_js))
        /*.pipe(uglify())*/
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(rename({suffix: ".min"}))
        .pipe(sourcemaps.write('.'))
        .pipe(size({showFiles: true, showTotal: false}))
        .pipe(gulp.dest(dist_js))
});


// Empty Dist/JS Folder
gulp.task('clean-js', function () {
    if (!checkProject()) {
        return false;
    }
    return gulp
        .src(dist_js, {read: false})
        .pipe(clean({force: true}))
});

// Watch SCSS Files
gulp.task('watch-css-js', function () {
    if (!checkProject()) {
        return false;
    }
    gulp.watch(src_scss, ['sass', 'todo']);
    gulp.watch(src_js, ['bundle-js']);
});


gulp.task('style', ['clean-css', 'clean-js'], function () {
    if (!checkProject()) {
        return false;
    }
    gulp.start('sass', 'todo', 'bundle-js', 'watch-css-js');
});


gulp.task('sassDocs', function () {
    let options = {
        dest: 'online/' + argv.project + '/docs/'
    };
    return gulp
        .src('online/' + argv.project + '/02-grid/**/*.scss')
        .pipe(sassdoc(sassdocOptions))

});


gulp.task('docs', function () {
    if (!checkProject()) {
        return false;
    }
    gulp.start('sassDocs');
});

gulp.task('pull', function () {
    git.pull('origin', 'master', function (err) {
        if (err) throw err;
    });
});


gulp.task('default', function () {
    if (!checkProject()) {
        return false;
    }
    gulp.start('style');
});

function preprocessCss2() {
    return gulp.src(config.src.scss).pipe(postcss([require('postcss-nested'), autoprefixer()], {syntax: require('postcss-scss')})).pipe(gulp.dest(function (file) {
        return path.join(build_dir, path.dirname(file.path))
    }));
}


gulp.task('newtest', function () {
    return gulp.src('src/styles/**/*.{css,scss}')
        .pipe(postcss([
            require('postcss-nested'),
            autoprefixer()
        ], {syntax: require('postcss-scss')}))
        .pipe(gulp.dest('src/styles/'));
});


/*
 *
 * Adds Autoprefixer to Slate
 *
 *
 * */

/*// Watch SCSS Files
gulp.task('watch:autoprefix:css', function () {
    gulp.watch('src/styles/!**!/!*.{css,scss}', ['autoprefix:css']);

});*/

gulp.task('autoprefix:css', function () {
    return gulp.src('src/styles/**/*.{css,scss}').pipe(plumber()).pipe(postcss([autoprefixer()], {syntax: require('postcss-scss')})).pipe(size({
        showFiles: true,
        showTotal: true
    })).pipe(gulp.dest('src/styles/'));
});


function preprocessCss() {
    return gulp.src('src/styles/**/*.{css,scss}').pipe(plumber()).pipe(postcss([autoprefixer()], {syntax: require('postcss-scss')})).pipe(size({
        showFiles: true,
        showTotal: true
    })).pipe(gulp.dest('src/styles/'));

}