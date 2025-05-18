Study Night Project
Overview
This project is a flashcards tool designed to help users study in an interactive and easy way. The project includes organized JavaScript files, well-designed CSS, automated tests to ensure code quality, and is built using modern tools like Parcel and Gulp.

Features
Create and shuffle flashcards randomly.

Responsive and attractive user interface.

Unit testing using Mocha to ensure function correctness.

End-to-end testing with Cypress for user experience validation.

Code quality and formatting enforced with ESLint and Prettier.

Automated build process with Parcel and Gulp.

How to Run Locally
Requirements
Node.js and npm installed on your machine.

Steps
Clone or download the project to your local machine.

Open terminal/command prompt in the project folder.

Install dependencies by running:

bash
Copy
Edit
npm install
To run the project in development mode:

bash
Copy
Edit
npx parcel index.html
To build the project for production:

bash
Copy
Edit
npx parcel build index.html
To run unit tests:

bash
Copy
Edit
npx mocha tests/shuffle.test.js
To run Cypress tests:

bash
Copy
Edit
npx cypress open
Or via Gulp:

bash
Copy
Edit
npx gulp