const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
    it("Can add number with constructor", () => {
        const testValue = 8999;
        const Man = new Manager("Foo", 50, "test@test.com", testValue);
        expect(Man.officeNumber).toBe(testValue);
    });

    it("getRole() returns 'Manager'", () => {
        const testValue = "Manager";
        const Man = new Manager("Foo", 50, "test@test.com", 8999);
        expect(Man.getRole()).toBe(testValue);
    });
});


