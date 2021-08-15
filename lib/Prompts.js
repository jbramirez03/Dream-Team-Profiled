const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHtmls = require('./generateHtml');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your team manager?'
    },
    {
        type: 'input',
        name: 'id',
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
        name: 'id',
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


function writeToFile(fileName, member1, member2, member3, member4, member5) {


    fs.writeFile(fileName, generateHtmls.generateHtml(member1, member2, member3, member4, member5), (err) => {
        err ? console.log(err) : console.log('Success!')
    });

}

const init = async () => {
    const managerObj = await inquirer.prompt(managerQuestions);
    const manager = new Manager(
        managerObj.name,
        managerObj.id,
        managerObj.email,
        managerObj.officeNum
    )
    console.log(manager);
    try {

        switch(managerObj.option) {
            case 'intern':
            const internObj = await inquirer.prompt(internQuestions);
            const intern = new Intern(
                internObj.name,
                internObj.id,
                internObj.email,
                internObj.school
            )
            console.log(intern);
            break;

            case 'engineer':

            break;
            default:
                "";
        }

    } catch (error) {
        console.error(error);
    }

};

init();