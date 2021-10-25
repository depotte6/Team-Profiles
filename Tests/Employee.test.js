const Employee = require("../lib/Employee");

test("can add new employee", () => {
    const e = new Employee("Mary");
    expect(typeof(e)).toBe("object");
});

test("can add name using constructor", () => {
    const name = "Mary";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("getName() returns name", () => {
    const name = "Mary";
    const e = new Employee("Mary");
    expect(e.getName()).toBe(name);
});
       
test("can add ID with constructor", () => {
    const testValue = 50;
    const e = new Employee("Foo", testValue);
    expect(e.ID).toEqual(testValue);
});

test("getID() returns ID", () => {
    const testValue = 50;
    const e = new Employee("Foo", 50);
    expect(e.getID()).toBe(testValue);
});

test("can add email with constructor", () => {
    const testValue = "test@test.com";
    const e = new Employee("Mary", 50, testValue);
    expect(e.email).toBe(testValue);
});

test("getEmail() returns email", () => {
    const testValue = "test@test.com";
    const e = new Employee("Mary", 50, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() returns 'Employee'", () => {
    const testValue = "Employee";
    const e = new Employee("Mary", 50, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});