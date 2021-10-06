const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can add number with constructor", () => {
    const testValue = 3809676;
    const e = new Manager("Mary", 50, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getNumber() returns office number", () => {
    const testValue = 3809676;
    const e = new Manager("Mary", 50, "test@test.com", testValue);
    expect(e.getNumber()).toBe(testValue);
});

test("getRole() returns 'Manager'", () => {
    const testValue = "Manager";
    const e = new Manager("Mary", 50, "test@test.com", 3809676);
    expect(e.getRole()).toBe(testValue);
});


