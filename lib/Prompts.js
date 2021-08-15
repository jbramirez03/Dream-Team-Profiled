const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require('./generateHtml');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your team manager?'
    },
    {
        type: 'input',
        name: 'Id',
        message: 'What is the employee ID of your team manager?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of your team manager?'
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is the office number of your team manager?'
    },
    {
        type: 'list',
        message: 'What member would you like to add next?',
        name: 'option',
        default: '',
        choices: ['intern', 'engineer'],
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your team intern's name?",
    },
    {
        type: 'input',
        name: 'Id',
        message: "What is your intern's employee ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your team intern's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is your team intern's school?",
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "what is your engineer's name?"
    },
    {
        type: 'input',
        name: 'Id',
        message: "What is your engineer's employee Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your team intern's Github username?"
    }
]


function writeToFile(fileName, data) {


    fs.writeFile(fileName, generateHtml(data), (err) => {
        err ? console.log(err) : console.log('Success!')
    });

}

function init() {
    inquirer.prompt(managerQuestions)
        .then((data) => {
            const manager = new Manager(data.name,data.Id,data.email,data.officeNum)
            console.log(manager);
            if(data.option === 'intern'){
                inquirer.prompt(internQuestions)
                .then((data) => {
                    const intern = new Intern(data.name,data.Id,data.email,data.school)
                    console.log(intern);
                })
            } else {
                inquirer.prompt(engineerQuestions)
                .then((data) => {
                    const engineer = new Engineer(data.name,data.Id,data.email,data.github);
                    console.log(engineer);
                })
            }
        })
        
}

init();