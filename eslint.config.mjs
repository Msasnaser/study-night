// // import { defineConfig } from "eslint/config";
// // import js from "@eslint/js";
// // import globals from "globals";
// // import pluginReact from "eslint-plugin-react";

// // export default defineConfig([
// //   { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
// //   { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
// //   { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
// //   pluginReact.configs.flat.recommended,
// // ]);
// import { defineConfig } from 'eslint/config';
// import js from '@eslint/js';
// import globals from 'globals';
// import pluginReact from 'eslint-plugin-react';

// export default defineConfig([
//   {
//     files: ['**/*.{js,mjs,cjs,jsx}'],
//     plugins: { js },
//     extends: ['js/recommended'],
//   },
//   {
//     files: ['**/*.js'],
//     languageOptions: { sourceType: 'module' },
//   },
//   {
//     files: ['**/*.{js,mjs,cjs,jsx}'],
//     languageOptions: { globals: globals.browser },
//   },
//   {
//     files: ['**/*.test.js'], // تحديد ملفات الاختبار
//     env: { mocha: true }, // إضافة بيئة Mocha للاختبارات
//   },
//   pluginReact.configs.flat.recommended,
// ]);
