// Import employee class in order to be able to create a subclass.
const Employee = require('./Employee');

// Manager is a subclass of employee that takes in a new parameter of officeNumber and a method to return that value.
class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber;
    }

    getOfficeNum() {
        return this.officeNumber
    }

    getRole() {
    return 'Manager'
    }
}

// Export manager class in order to be used in other files.
module.exports = Manager;