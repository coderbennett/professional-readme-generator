// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please give a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "How does someone install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How is your project used?",
        name: "usage"
    },
    {
        type: "input",
        message: "Which license are you using?",
        name: "license"
    },
    {
        type: "input",
        message: "What are your contribution guidelines?",
        name: "contributions"
    },
    {
        type: "input",
        message: "What are the testing instructions?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
     fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err)=>{});
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            let responses = {};
            responses.title = response.title;
            responses.description = response.description;
            responses.installation = response.installation;
            responses.usage = response.usage;
            responses.license = response.license;
            responses.contribution = response.contribution;
            responses.tests = response.tests;
            responses.username = response.username;
            responses.email = response.email;
            writeToFile("GENERATED.md", responses);
        })

    
}

// Function call to initialize app
init();
