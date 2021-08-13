const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {

    describe('initialization', () => {
        it("should return an object containing a 'name' property", () => {
            const obj = new Engineer();

            expect("name" in obj).toEqual(true);
        });

        it("Should return an object containing a 'id' property ", () => {
            const obj = new Engineer();
            expect('id' in obj).toEqual(true);
        });

        it("Should return an object containing a 'email' property ", () => {
            const obj = new Engineer();

            expect('email' in obj).toEqual(true);
        });

        it("Should return an object containing a 'github' property ", () => {
            const obj = new Engineer();

            expect('github' in obj).toEqual(true);
        });
    });

    describe("getGithub", () => {

        it("should return the github property inside the object", () => {
            const obj = new Engineer('json',12,'jason','jb');

            expect(obj.getGithub()).toBe('jb');
        });

    });

    describe("getRole", () => {

        it("should return the role of the team member", () => {
            const obj = new Engineer();

            expect(obj.getRole()).toBe('Engineer');
        });

    });

});