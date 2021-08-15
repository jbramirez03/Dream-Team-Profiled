// Import the employee class in order to make a subclass.
const Employee = require('./Employee');

// Intern is a subclass of employee and it takes in a new parameter called school with a method to return school.
class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email)
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

// Export intern class in order to be used in other files.
module.exports = Intern;