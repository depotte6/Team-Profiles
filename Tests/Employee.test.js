const Employee = require("../lib/Employee");

//describe("Employee", () => {
test("can add new employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("can add name using constructor", () => {
    const name = "Mary";
    const e = new Employee("Mary");
    expect(e.name).toBe(name);
});
test("getName() returns name", () => {
    const testValue = "Mary";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});
       
test("can add ID with constructor", () => {
    const testValue = 50;
    const e = new Employee("Foo", testValue);
    expect(e.ID).toEqual(testValue);
});

test("getID() returns ID", () => {
    const testValue = 50;
    const e = new Employee("Foo", testValue);
    expect(e.getID()).toBe(testValue);
});

test("can add email with constructor", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 50, testValue);
    expect(e.email).toBe(testValue);
});

test("getEmail() returns email", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", testValue);
    expect(e.getemail()).toBe(testValue);
});

test("getRole() returns 'Employee'", () => {
    const testValue = "Employee";
    const e = new Employee("Foo", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});