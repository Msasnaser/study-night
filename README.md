Study Night Project
Overview
This project is a flashcards tool designed to help users study in an interactive and easy way.
It includes:

Organized JavaScript files

Well-designed CSS styles

Automated tests for code quality

Built using modern tools like Parcel and Gulp

Features
Create and shuffle flashcards randomly

Responsive and attractive user interface

Unit testing with Mocha for function correctness

End-to-end testing with Cypress for user experience validation

Code quality enforcement using ESLint and Prettier

Automated build process with Parcel and Gulp

How to Run Locally
Requirements
Node.js and npm installed on your machine

Steps
Clone or download the project

Open terminal/command prompt in the project folder

Install dependencies:

bash
Copy
Edit
npm install
Run the project in development mode
bash
Copy
Edit
npx parcel index.html
Build project for production
bash
Copy
Edit
npx parcel build index.html
Run unit tests (Mocha)
bash
Copy
Edit
npm test
or

bash
Copy
Edit
npx mocha tests/shuffle.test.js
Run Cypress tests (end-to-end)
bash
Copy
Edit
npm run cypress:open
Run full build and tests via Gulp
bash
Copy
Edit
npm run gulp