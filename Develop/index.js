// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "table of Contents",
        message: "Provide table of contents"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples of use"
    },
    {
        type: "input",
        name: "license",
        message: "Provide a license"
    },
    {
        type: "input",
        name: "contributing",
        message: "What other developers contributed to the project?"
    },
    {
        type: "input",
        name: "test",
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
inquirer.prompt(questions).then(function(data) {
    console.log (data);
    var content = generateMarkdown(data);
    console.log(content);

    fs.writeFile('ReadMe.md', content, function(err){
        if (err) throw err
        console.log('This is a success')
    })
})

