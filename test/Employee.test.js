const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('Initialization', () => {

        it("should return an object containing a 'name' property", () => {
            const obj = new Employee('jason');
    
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
    


});