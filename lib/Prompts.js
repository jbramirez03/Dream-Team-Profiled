const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHtml = require('./generateHtml');

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
        name: 'id',
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
        message: "What is your team engineer's Github username?"
    }
]


function writeToFile(fileName, member1, member2, member3, member4, member5) {


    fs.writeFile(fileName, generateHtml(member1, member2, member3, member4, member5), (err) => {
        err ? console.log(err) : console.log('Success!')
    });

}

const init = async () => {
    const managerObj = await inquirer.prompt(managerQuestions);
    const manager = new Manager(managerObj.name, managerObj.id, managerObj.email, managerObj.officeNum);
    console.log(manager);
    try {

        switch (managerObj.option) {
            case 'intern':
                const internObj = await inquirer.prompt(internQuestions);
                const intern = new Intern(
                    internObj.name, internObj.id, internObj.email, internObj.school)
                console.log(intern);
                const firstEngineerObj = await inquirer.prompt(engineerQuestions);
                const firstEngineer = new Engineer(
                    firstEngineerObj.name,
                    firstEngineerObj.id,
                    firstEngineerObj.email,
                    firstEngineerObj.github
                );
                console.log(firstEngineer);
                const secondEngineerObj = await inquirer.prompt(engineerQuestions);
                const secondEngineer = new Engineer(
                    secondEngineerObj.name,
                    secondEngineerObj.id,
                    secondEngineerObj.email,
                    secondEngineerObj.github
                );
                console.log(secondEngineer);
                const thirdEngineerObj = await inquirer.prompt(engineerQuestions);
                const thirdEngineer = new Engineer(
                    thirdEngineerObj.name,
                    thirdEngineerObj.id,
                    thirdEngineerObj.email,
                    thirdEngineerObj.github
                );
                console.log(thirdEngineer);
                break;

            case 'engineer':
                const fstEngineerObj = await inquirer.prompt(engineerQuestions);
                const fstEngineer = new Engineer(
                    fstEngineerObj.name,
                    fstEngineerObj.id,
                    fstEngineerObj.email,
                    fstEngineerObj.github
                );
                console.log(fstEngineer);
                const secEngineerObj = await inquirer.prompt(engineerQuestions);
                const secEngineer = new Engineer(
                    secEngineerObj.name,
                    secEngineerObj.id,
                    secEngineerObj.email,
                    secEngineerObj.github
                );
                console.log(secEngineer);
                const thirEngineerObj = await inquirer.prompt(engineerQuestions);
                const thirEngineer = new Engineer(
                    thirEngineerObj.name,
                    thirEngineerObj.id,
                    thirEngineerObj.email,
                    thirEngineerObj.github
                );
                console.log(thirEngineer);
                const internObj1 = await inquirer.prompt(internQuestions);
                const intern1 = new Intern(internObj1.name, internObj1.id, internObj1.email, internObj1.school);
                console.log(intern1);
                break;
            default:
                "";
        }

    } catch (error) {
        console.error(error);
    }

};

init();