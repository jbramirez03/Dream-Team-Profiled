const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require('./generateHtml');

const questions = [
    {
        type: 'input',
        name: 'manager-name',
        message: 'What is the name of your team manager?'
    },
    {
        type: 'input',
        name: 'manager-id',
        message: 'What is the employee ID of your team manager?'
    },
    {
        type: 'input',
        name: 'manager-email',
        message: 'What is the email of your team manager?'
    },
    {
        type: 'input',
        name: 'manager-office',
        message: 'What is the office number of your team manager?'
    },
    {
        type: 'list',
        message: 'What member would you like to add next?',
        name: 'option',
        default: '',
        choices: ['intern', 'engineer'],
    },
    {
        type: 'input',
        name: 'internName',
        message: "What is your team intern's name?",
        when: (answers) => answers.option === 'intern'
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is your intern's employee ID?",
        when: (answers) => answers.option === 'intern'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is your team intern's email?",
        when: (answers) => answers.option === 'intern'
    },
    {
        type: 'input',
        name: 'internGithub',
        message: "What is your team intern's Github username?",
        when: (answers) => answers.option === 'intern'
    }

];


function writeToFile(fileName, data) {


    fs.writeFile(fileName, generateHtml(data), (err) => {
        err ? console.log(err) : console.log('Success!')
    });

}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            // writeToFile("index.html", data);
            console.log('success');

        })
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
}

init();