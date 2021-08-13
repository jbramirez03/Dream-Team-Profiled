const Intern = require('../lib/Intern');

describe("Intern class", () => {

    describe('initialization', () => {
        it("should return an object containing a 'name' property", () => {
            const obj = new Intern();

            expect("name" in obj).toEqual(true);
        });

        it("Should return an object containing a 'id' property ", () => {
            const obj = new Intern();
            expect('id' in obj).toEqual(true);
        });

        it("Should return an object containing a 'email' property ", () => {
            const obj = new Intern();

            expect('email' in obj).toEqual(true);
        });

        it("Should return an object containing a 'school' property ", () => {
            const obj = new Intern();

            expect('school' in obj).toEqual(true);
        });
    });

    describe("getSchool", () => {

        it("should return the github property inside the object", () => {
            const obj = new Intern('json',12,'jason','UNC');

            expect(obj.getSchool()).toBe('UNC');
        });

    });

    describe("getRole", () => {

        it("should return the role of the team member", () => {
            const obj = new Intern();

            expect(obj.getRole()).toBe('Intern');
        });

    });

});