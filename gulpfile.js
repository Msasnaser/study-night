import gulp from "gulp";
import shell from "gulp-shell";

// مهمة لتشغيل Parcel لبناء المشروع
gulp.task("build", shell.task("npx parcel build index.html"));

// مهمة لتشغيل اختبارات Mocha
gulp.task("test:mocha", shell.task("npx mocha tests/**/*.test.js"));

// مهمة لتشغيل اختبارات Cypress
gulp.task("test:cypress", shell.task("npx cypress run"));

// مهمة لتشغيل السيرفر المحلي بعد الاختبارات
gulp.task("serve", shell.task("npx parcel index.html"));

// المهمة الافتراضية: بناء، اختبار، ثم تشغيل السيرفر
gulp.task(
  "default",
  gulp.series("build", "test:mocha", "test:cypress", "serve")
);
