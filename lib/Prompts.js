// Importing different files and npm packages and the generateHtml function.
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHtml = require('./generateHtml');

// Array containing the questions for manager card creation.
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

// Array containing questions for intern card creation.
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

// Array containing questions for engineer card creation.
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

// Function to write file by using the imported generateHtml function and throws an error if function is compromised.
function writeToFile(fileName, member1, member2, member3, member4, member5) {


    fs.writeFile(fileName, generateHtml(member1, member2, member3, member4, member5), (err) => {
        err ? console.log(err) : console.log('Success!')
    });

}

// Asynchronous function that renders prompts and creates objects based on input given by user.
const init = async () => {
    const managerObj = await inquirer.prompt(managerQuestions);
    const manager = new Manager(managerObj.name, managerObj.id, managerObj.email, managerObj.officeNum);
    try {
// Switch case is used in order to determine how the prompts run based on the choice of intern or engineer.
        switch (managerObj.option) {
            case 'intern':
                const internObj = await inquirer.prompt(internQuestions);
                const intern = new Intern(
                    internObj.name, internObj.id, internObj.email, internObj.school)
                const engineerObj = await inquirer.prompt(engineerQuestions);
                const engineer = new Engineer(
                    engineerObj.name,
                    engineerObj.id,
                    engineerObj.email,
                    engineerObj.github
                );
                const secEngineerObj = await inquirer.prompt(engineerQuestions);
                const secEngineer = new Engineer(
                    secEngineerObj.name,
                    secEngineerObj.id,
                    secEngineerObj.email,
                    secEngineerObj.github
                );
                const thirdEngineerObj = await inquirer.prompt(engineerQuestions);
                const thirdEngineer = new Engineer(
                    thirdEngineerObj.name,
                    thirdEngineerObj.id,
                    thirdEngineerObj.email,
                    thirdEngineerObj.github
                );
                writeToFile('index.html', manager,intern,engineer,secEngineer,thirdEngineer);
                break;

            case 'engineer':
                const engineerInfo = await inquirer.prompt(engineerQuestions);
                const engineer1st = new Engineer(
                    engineerInfo.name,
                    engineerInfo.id,
                    engineerInfo.email,
                    engineerInfo.github
                );
                const secEngineerInfo = await inquirer.prompt(engineerQuestions);
                const engineer2nd = new Engineer(
                    secEngineerInfo.name,
                    secEngineerInfo.id,
                    secEngineerInfo.email,
                    secEngineerInfo.github
                );
                const thirdEngineerInfo = await inquirer.prompt(engineerQuestions);
                const engineer3rd = new Engineer(
                    thirdEngineerInfo.name,
                    thirdEngineerInfo.id,
                    thirdEngineerInfo.email,
                    thirdEngineerInfo.github
                );
                const internObj1 = await inquirer.prompt(internQuestions);
                const intern1 = new Intern(internObj1.name, internObj1.id, internObj1.email, internObj1.school);
                writeToFile('index.html', manager,engineer1st,engineer2nd,engineer3rd,intern1);
                break;
            default:
                "";
        }
// A catch is used in the case there is an error then it will console log the error.
    } catch (error) {
        console.error(error);
    }

};
// Export the init function in order to be called in another file.
module.exports = init;

// init();