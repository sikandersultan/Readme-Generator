// some consts required to initiate this readme generator

const fs = require('fs')
const inquirer = require('inquirer')

// brings in the readme js file so it can gather the user inputted data

const newReadme = require('./utils/generateMarkdown.js')

// questions to ask the user

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
            name: 'installation',
            message: 'Please enter some information about how to install and initiate your project file'
        },
        {
            type: "input",
            name: "usage",
            message: "Please enter any information related to using this project"
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Enter the relevant test commands or instructions for your project'
        },
        {
            type: "list",
            name: "license",
            message: "Licensing Options",
            choices: [
                "Apache",
                "MIT",
                "Boost",
                "CreativeCommons",
                "Eclipse",
                "GNU",
                "Mozilla",
                "TheUnilicense"
            ]
        }
    ])
}
questions()
.then(answers => {
    return newReadme(answers)
})

.catch(err => {console.log(err)})

// writes/creates the new readme file, including all the relevant data

.then(data => {
    const newFile = data => {
        fs.writeFile('NewReadme.md', data, err => {
            if (err) {
                console.log(err)
                return
            } else {
                console.log("Your new readme is doneeeeeeee wowwww so ebic amazing just pure coding skill no jk I still suck but hey u have a readme now :)")
            }
        })
    }
    return newFile(data)
})

