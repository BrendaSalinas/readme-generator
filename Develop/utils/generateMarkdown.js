// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (!license === 'MIT') {
  //   return "this worked"
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributions](#Contributions)
  * [Questions](#Questions)
  
  ## Description
  ${data.description}

  ## Installation
  1. ${data.installOne}
  2. ${data.installTwo}
  3. ${data.installThree}

  ## Usage
  ## As a developer
  ${data.usage}

  ## Screenshots (Use this application)

  ![first](assets/images/${data.screenshot1}.png)
  ![second](assets/images/${data.screenshot2}.png)

  ## License
  ${data.license1}

  ## Contributions


  ## Questions
  Contributors: github.com/${data.github}

  If you have any questions please reach out to the following e-mail: ${data.email}

`;
}

module.exports = generateMarkdown;
