const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
    it("Can add number with constructor", () => {
        const testValue = 50;
        const Man = new Manager("Foo", 1, "test@test.com", testValue);
        expect(Man.officeNumber).toBe(testValue);
    });
});


