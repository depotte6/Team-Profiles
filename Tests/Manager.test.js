const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


test("Can add number with constructor", () => {
    const testValue = 3809676;
    const m = new Manager("Foo", 50, "test@test.com", testValue);
    expect(m.officeNumber).toBe(testValue);
});

test("getRole() returns 'Manager'", () => {
    const testValue = "Manager";
    const m = new Manager("Foo", 50, "test@test.com", 8999);
    expect(m.getRole()).toBe(testValue);
});


