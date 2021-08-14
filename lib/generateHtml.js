const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const inquirer = require("inquirer");
const fs = require("fs");

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
const generateHtml = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dream Team</title>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <nav class="navbar">
        <h1>My Team</h1>
    </nav>
    
    <body>
        <div class="cards">
            <div class="level1">
                <div class="card1">
                    <div>
                        <h1 class="name">Hello</h1>
                        <h2 class="role">hello!</h2>
                    </div>
                    <div class="info">
                        <table>
                            <tr>
                                <td>ID:</td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                            </tr>
                            <tr>
                                <td>Office Number</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="card1">
                    <div>
                        <h1 class="name">Hello</h1>
                        <h2 class="role">hello!</h2>
                    </div>
                    <div class="info">
                        <table>
                            <tr>
                                <td>ID:</td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                            </tr>
                            <tr>
                                <td>Office Number</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="card1">
                    <div>
                        <h1 class="name">Hello</h1>
                        <h2 class="role">hello!</h2>
                    </div>
                    <div class="info">
                        <table>
                            <tr>
                                <td>ID:</td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                            </tr>
                            <tr>
                                <td>Office Number</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="level2">
                <div class="card1">
                    <div>
                        <h1 class="name">Hello</h1>
                        <h2 class="role">hello!</h2>
                    </div>
                    <div class="info">
                        <table>
                            <tr>
                                <td>ID:</td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                            </tr>
                            <tr>
                                <td>Office Number</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="card1">
                    <div>
                        <h1 class="name">Hello</h1>
                        <h2 class="role">hello!</h2>
                    </div>
                    <div class="info">
                        <table>
                            <tr>
                                <td>ID:</td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                            </tr>
                            <tr>
                                <td>Office Number</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
    
    
        </div>
    </body>
    
    </html>`
};

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