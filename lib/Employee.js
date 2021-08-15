// Employee class that takes in a name, id, and email with different methods to return each property in the object.
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getID() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

// Export employee class in order to use in other files.
module.exports = Employee;