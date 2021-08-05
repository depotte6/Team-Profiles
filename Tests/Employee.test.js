const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("can add new employee", () => {
        const Emp = new Employee();
        expect(typeof(Emp)).toBe("object");
    });

    it("can add name using constructor", () => {
        const testValue = "Foo";
        const Emp = new Employee(testValue);
        expect(Emp.name).toBe(testValue);
    });
       
    it("can add ID with constructor", () => {
        const testValue = 50;
        const Emp = new Employee("Foo", testValue);
        expect(Emp.ID).toEqual(testValue);
    });

    it("can add email with constructor", () => {
        const testValue = "test@test.com";
        const Emp = new Employee("Foo", 50, testValue);
        expect(Emp.email).toBe(testValue);
    });

    it("getRole() returns 'Employee'", () => {
        const testValue = "Employee";
        const Emp = new Employee("Foo", 1, "test@test.com");
        expect(Emp.getRole()).toBe(testValue);
    });

});