// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// // Import the renderLicenseBadge function
// const { renderLicenseBadge } = require('../utils/generateMarkdown');
// function renderLicenseBadge(license) {
//   if (license === 'MIT License') {
//         return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//     }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === 'MIT License') {
//         return 'https://opensource.org/license/mit'
//     }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// // function renderLicenseSection(license) {}
// // ${answers.badges} line 26
// // TODO: Create a function to generate markdown for README
// function generateMarkdown(answers) {
//   return `
// # ${answers.projectTitle}
// ## Badges

// ${licenseBadge}
// ## Table of Contents
// - [Description](#description)
// - [Built With](#built-with)
// ## Description
// ${answers.motivationDescription}
// ${answers.buildDescription}
// ${answers.problemDescription}
// ${answers.learnDescription}
// # Getting Started
// ## Built With
// ${answers.builtWith}
// ## Prerequisites
// ${answers.prerequisites}
// ## Installation
// ${answers.installation}
// ## Usage
// ${answers.usage}
// ## Tests
// ${answers.test}
// ## Contribution
// ${answers.credit}
// ## License
// This project is license under ${answers.license}
// View more information here: ${renderLicenseLink(answers.license)}
// ## Contact Me
// ${answers.username}
// ${answers.email}
// ## Acknowledgments
// ${answers.acknowledgments}

// `;
// }

// module.exports = generateMarkdown;


// Import the renderLicenseBadge function
// const { renderLicenseBadge } = require('../utils/generateMarkdown');

// Function to generate the license badge based on the selected license
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
}

// Function to generate the license link based on the selected license
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  }
}

// Function to generate the markdown for the README
function generateMarkdown(answers) {
  // Call renderLicenseBadge function to get the license badge based on the selected license
  const licenseBadge = renderLicenseBadge(answers.license);

  return `
# ${answers.projectTitle}

## Badges
${licenseBadge}

## Table of Contents
- [Description](#description)
- [Built With](#built-with)

## Description
${answers.motivationDescription}
${answers.buildDescription}
${answers.problemDescription}
${answers.learnDescription}

# Getting Started

## Built With
${answers.builtWith}

## Prerequisites
${answers.prerequisites}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Tests
${answers.test}

## Contribution
${answers.credit}

## License
This project is licensed under ${answers.license}. View more information here: ${renderLicenseLink(answers.license)}

## Contact Me
${answers.username}
${answers.email}

## Acknowledgments
${answers.acknowledgments}
`;
}

module.exports = generateMarkdown;