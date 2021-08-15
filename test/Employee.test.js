// Import employee class in order ot run tests on the class.
const Employee = require('../lib/Employee');

// First test on initialization of employee class and making sure all properties of the class exist when created.
describe('Employee class', () => {
    describe('Initialization', () => {

        it("should return an object containing a 'name' property", () => {
            const obj = new Employee();
    
            expect("name" in obj).toEqual(true);
        });
    
        it("Should return an object containing a 'id' property ", () => {
            const obj = new Employee();
            expect('id' in obj).toEqual(true);
        });
    
        it("Should return an object containing a 'email' property ", () => {
            const obj = new Employee();
            
            expect('email' in obj).toEqual(true);
        });

    });

    // Test on the getName method ensuring it returns the class's name property.
    describe("getName", () => {

        it("should return the name property inside the object", () => {
            const obj = new Employee('json',12,'jason');

            expect(obj.getName()).toBe('json');
        });

    });
    
    // Test on the getId method ensuring it returns the class's Id property.
    describe("getId", () => {

        it("should return the id property inside the object", () => {
            const obj = new Employee('json',12,'jason');

            expect(obj.getID()).toBe(12);
        });

    });

    // Test on the getEmail method ensuring it returns the class's email property.
    describe("getEmail", () => {

        it("should return the email property inside the object", () => {
            const obj = new Employee('json',12,'jason');

            expect(obj.getEmail()).toBe('jason');
        });

    });

    // Test on the getRole method ensuring it returns the string 'Employee'.
    describe("getRole", () => {

        it("should return the role of the team member", () => {
            const obj = new Employee();

            expect(obj.getRole()).toBe('Employee');
        });

    });


});