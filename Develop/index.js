// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const newReadme = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Kindly enter your work/github related Email Address'
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'Can I have your project name please?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write out a brief but concise description of your project'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter some information about how to use and initiate your project file'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Enter the relevant test commands or instructions for your project'
        },
        {
            type: "checkbox",
            name: "license",
            message: "Licensing Options",
            choices: [
                "Apache",
                "MIT",
                "Boost",
                "Creative Commons",
                "Eclipse",
                "GNU",
                "Mozilla",
                "The Unilicense"
            ]
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
