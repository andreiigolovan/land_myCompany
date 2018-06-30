var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src(['main/sass/**/*.sass', 'main/sass/**/*.scss']) // Берем источник
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('main/css')) // Выгружаем результата в папку main/css
        .pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'main' // Директория для сервера - main
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('main/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('main/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('main/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});

// gulp.task('default', ['watch']);