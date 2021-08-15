// Use require in order to import the employee class.
const Employee = require('./Employee');

// An engineer class that is a subclass of employee that takes in the same parameters and a new github param. Method added to return github.
class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

// Export engineer class to be used in other files.
module.exports = Engineer;