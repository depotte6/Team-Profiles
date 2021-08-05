const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("can add new employee", () => {
        const Emp = new Employee();
        expect(typeof(Emp)).toBe("object");
    });
    describe("can add using constructor", () => {
        const testValue = "Megan";
        const Emp = new Employee(testValue);
        expect(Emp.name).toBe(testValue);

    });



});