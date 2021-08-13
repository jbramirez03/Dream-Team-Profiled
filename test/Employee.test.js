const { describe, it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

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

    describe("getName", () => {

        it("should return the name property inside the object", () => {
            const obj = new Employee('json',12,'jason');

            expect(obj.getName()).toBe('json');
        });

    });
    
    describe("getId", () => {

        it("should return the id property inside the object", () => {
            const obj = new Employee('json',12,'jason');

            expect(obj.getID()).toBe(12);
        });

    });

    describe("getEmail", () => {

        it("should return the email property inside the object", () => {
            const obj = new Employee('json',12,'jason');

            expect(obj.getEmail()).toBe('jason');
        });

    });

    describe("getRole", () => {

        it("should return the role of the team member", () => {
            const obj = new Employee();

            expect(obj.getRole()).toBe('Employee');
        });

    });


});