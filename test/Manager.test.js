// Import the manager class in order to be able to run tests on it.
const Manager = require('../lib/Manager');

describe('Manager class', () => {

    // First test checking that all the properties in the class exist once a new class is made.
    describe("initialization", () => {
        it("should return a object containing a name property", () => {
            const obj = new Manager();
            expect('name' in obj).toEqual(true);
        });

        it("should return a object containing a id property", () => {
            const obj = new Manager();
            expect('id' in obj).toEqual(true);
        });

        it("should return a object containing a email property", () => {
            const obj = new Manager();
            expect('email' in obj).toEqual(true);
        });

        it("should return a object containing a officeNumber property", () => {
            const obj = new Manager();
            expect('officeNumber' in obj).toEqual(true);
        });

    });

    // Test on the getOfficeNum method checking if it returns the office number property in the class.
    describe("getOfficeNum", () => {

        it("should return the github property inside the object", () => {
            const obj = new Manager('json',12,'jason',10);

            expect(obj.getOfficeNum()).toBe(10);
        });

    });

    // Test on the getRole method checking if it returns the string 'Manager'.
    describe("getRole", () => {

        it("should return the role of the team member", () => {
            const obj = new Manager();

            expect(obj.getRole()).toBe('Manager');
        });

    });


});