// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectTitle',
    },
    {
        type: 'checkbox',
        message: 'Table of Content',
        name: 'content',
        choices: ['Description','Getting Started','Built With','Prerequisites','Installation', 'Usage','Tests','Contribution', 'License', 'Badges',  'Contact Me', 'Acknowledgments'],
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'motivationDescription',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'buildDescription',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'problemDescription',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learnDescription',
    },
     {
        type: 'checkbox',
        message: 'What is it built with?',
        name: 'builtWith',
        choices: ['NEXT.JS', 'REACT', 'ANGULAR', 'BOOTSTRAP', 'JQUERY', 'SQL', 'EXPRESS.JS','NODE.JS','HTML','CSS'],
    },
    {
        type: 'input',
        message: 'What are some prerequisites needed before starting (example: npm install colors or inquirer@^8.0.0)?',
        name: 'prerequisites',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for usage. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide examples of how to run your test here.',
        name: 'test',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credit',
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Smplified" License', 'BSD 3-Clause "New" or "Revised" License'],
    },
    {
        type: 'input',
        message: 'Provide your badges here.',
        name: 'badges',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What resources did you use that was helpful when creating your application?',
        name: 'acknowledgments',
    }
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    const READMETemplate = generateMarkdown(answers);
    fs.writeFile("README.md", READMETemplate, (err) => {
        if (err) {
            throw err;
        }
        console.log('Sucess!!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile(answers);
        });
}

// Function call to initialize app
init();
