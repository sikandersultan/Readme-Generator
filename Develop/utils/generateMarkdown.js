// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.projectName}
  ![Github licence](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Tests 
  ${data.testing}

  ## Questions
  Any related questions to this project can directed to me throught my email at ${data.email}. For more projects made my me, visit my github profile at https://github.com/${data.github}.

  ## License 
  Licensed under ${data.license} 

  `;
}

module.exports = generateMarkdown;
