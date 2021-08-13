const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [];
const generateHtml = (data) => {
    return ``
};

function writeToFile(fileName, data) {

    
    fs.writeFile(fileName,generateHtml(data),(err) => {
        err ? console.log(err) : console.log('Success!')
      });

}

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("index.html", data);
        
})
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}