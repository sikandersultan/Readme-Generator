
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
