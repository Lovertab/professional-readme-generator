// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
    .createPromptModule([
        {
            type: 'input',
            message: 'What is your project title?',
            name:'project-title',
        },
        {
            type: 'input',
            message: 'What are your sections titles?',
            name:'section-titles',
        },
        {
            type: 'input',
            message: 'What was your motivation?',
            name:'motivation-description',
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name:'build-description',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name:'problem-description',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name:'learn-description',
        },
        {
            type: 'checkbox',
            message: 'Table of Content',
            name: 'content',
            choices: ['Installation', 'Usage', 'Credits', 'License', 'Tests'],
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
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
            name: 'collaborators',
        },
        {
            type: 'checkbox',
            message: 'What license are you using?',
            name: 'licenses',
            choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Smplified" License', 'BSD 3-Clause "New" or "Revised" License'],
        },
        {
            type: 'input',
            message: 'Provide your badges here.',
            name: 'badges',
        },
         {
            type: 'input',
            message: 'Provide examples of how to run your test here.',
            name: 'tests',
        },
    ])
    // this was given but idk what i'm supposed to add to it..
const questions = [];

// TODO: Create a function to write README file
function writeToFile("README.md", data, (eer)) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
