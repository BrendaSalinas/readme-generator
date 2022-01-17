// TODO: Include packages needed for this application
const fs = require('fs');
const { prompt } = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: "input",
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "Provide table of contents"
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions and examples of use"
    },
    {
        type: "input",
        name: "License",
        message: "Provide a license"
    },
    {
        type: "input",
        name: "Contributing",
        message: "What other developers contributed to the project?"
    },
    {
        type: "input",
        name: "Test",
        message: "What test can you do?"
    },
    {
        type: "input",
        name: "Questions",
        message: "What questions do you have?"
    },
    {
        type: "input",
        name: "E-mail",
        message: "Enter your e-mail: "
    },
    {
        type: "input",
        name: "Github",
        message: "Enter your github username: "
    }   
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(`${fileName}.md`, data);
// }

// // TODO: Create a function to initialize app
// function init() {
//     prompt(questions).then(ans => {
//         writeToFile("README", ans)
//     })
// }

// // Function call to initialize app
// init();
