// import gulp from 'gulp';
// import shell from 'gulp-shell';

// gulp.task('parcel', () => {
//   return gulp
//     .src('index.html')
//     .pipe(shell('parcel build index.html --dist-dir dist'));
// });

// gulp.task('default', gulp.series('parcel'));
// import gulp from "gulp";
// import shell from "gulp-shell";

// const runParcel = shell.task(["npx parcel build index.html"]);
// const runMocha = shell.task(["npx mocha"]);
// const runCypress = shell.task(["npx cypress run"]);

// export const build = gulp.series(runParcel);
// export const test = gulp.series(runMocha, runCypress);
// export const defaultTask = gulp.series(runParcel, runMocha, runCypress);

// export default defaultTask;
import gulp from "gulp";
import shell from "gulp-shell";

// مهمة لتشغيل Parcel لبناء المشروع
gulp.task("build", shell.task("npx parcel build index.html"));

// مهمة لتشغيل اختبارات Mocha
gulp.task("test:mocha", shell.task("npx mocha tests/**/*.test.js"));

// مهمة لتشغيل اختبارات Cypress (ستارت سيرفر Cypress ثم تفتح التستات)
gulp.task("test:cypress", shell.task("npx cypress run"));

// مهمة افتراضية تشغل البناء والاختبارات مع بعض
gulp.task(
  "default",
  gulp.series("build", "test:mocha", "test:cypress")
);
