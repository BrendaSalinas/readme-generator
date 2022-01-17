// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `(https://img.shields.io/npm/l/inquirer)`;
  } else if (license == 'GNU 3.0') {
    return `(https://img.shields.io/badge/license-GNU%203.0-green)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return `(https://choosealicense.com/licenses/mit/)`;
  } else if (license == 'GNU 3.0') {
    return `(https://choosealicense.com/licenses/gpl-3.0/)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'MIT') {
    return `
    MIT license 
    Copyright (c) 2022 Brenda Salinas
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`;
  } else if (license == 'GNU 3.0') {
    return `                    
    GNU GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007

    Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Languages](#Languages)
  * [License](#License)
  * [Questions](#Questions)
  
  ## Description
  ${data.description}

  ## Installation
  1. ${data.installOne}
  2. ${data.installTwo}
  3. ${data.installThree}

  ## Usage
  ### As a developer
  ${data.usage}

  ## Screenshots (Use this application)

  ![first](assets/images/${data.screenshot1}.png)
  ![second](assets/images/${data.screenshot2}.png)

  ## Languages
  Built with : ${data.languages}

  ## License
  ![MIT]${renderLicenseBadge(data.license)}

  [License link]${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

  ## Questions
  Contributors: https://github.com/${data.github}

  If you have any questions please reach out to the following e-mail:${data.email}

`;
}

module.exports = generateMarkdown;
