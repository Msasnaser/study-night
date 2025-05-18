
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
