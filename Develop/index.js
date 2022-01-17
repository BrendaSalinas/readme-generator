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
        name: "installOne",
        message: "What are the steps required to install your project (1/3)?"
    },
    {
        type: "input",
        name: "installTwo",
        message: "What are the steps required to install your project? (2/3)"
    },
    {
        type: "input",
        name: "installThree",
        message: "What are the steps required to install your project? (3/3)"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples of use"
    },
    {
        type: "input",
        name: "screenshot1",
        message: "Provide name first screenshot (PNG) of used application"
    },
    {
        type: "input",
        name: "screenshot2",
        message: "Provide name of second screenshot (PNG) of used application"
    },
    {
        type: "list",
        name: "license",
        message: "Select the license that you would like to use: ",
        choices: [
            "MIT",
            "GNU 3.0",
            "None"
        ]
    },
    {
        type: "input",
        name: "github",
        message: "What developer contributed to the project (Provide github username)?"
    },
    {
        type: "input",
        name: "e-mail",
        message: "Enter your e-mail in case the user has any questions: "
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

