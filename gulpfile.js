const gulp = require('gulp')
const flatMap = require('flat-map').default
const scaleImages = require('gulp-scale-images')

function defaultTask(cb) {
    const twoVariantsPerFile = (file, cb) => {
        const jpegFile = file.clone()
        jpegFile.scale = {maxWidth: 150, format: 'jpeg'}
        const jpegFile2 = file.clone()
        jpegFile2.scale = {maxWidth: 300, format: 'jpeg'}
        const jpegFile3 = file.clone()
        jpegFile3.scale = {maxWidth: 600, format: 'jpeg'}
        const jpegFile4 = file.clone()
        jpegFile4.scale = {maxWidth: 900, format: 'jpeg'}
        const jpegFile5 = file.clone()
        jpegFile5.scale = {maxWidth: 1200, format: 'jpeg'}
        
        const webpFile = file.clone()
        webpFile.scale = {maxWidth: 150, format: 'webp'}
        const webpFile2 = file.clone()
        webpFile2.scale = {maxWidth: 300, format: 'webp'}
        const webpFile3 = file.clone()
        webpFile3.scale = {maxWidth: 600, format: 'webp'}
        const webpFile4 = file.clone()
        webpFile4.scale = {maxWidth: 900, format: 'webp'}
        const webpFile5 = file.clone()
        webpFile5.scale = {maxWidth: 1200, format: 'webp'}
       
        cb(null, [
            jpegFile, 
            jpegFile2, 
            jpegFile3, 
            jpegFile4, 
            jpegFile5, 
            webpFile,
            webpFile2, 
            webpFile3, 
            webpFile4, 
            webpFile5])
    }
     
    return gulp.src('img/**/*.{jpeg,jpg}')
        .pipe(flatMap(twoVariantsPerFile))
        .pipe(scaleImages())
        .pipe(gulp.dest('dist/img'))
}

exports.default = defaultTask