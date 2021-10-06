const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");


test("Can add github with constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 50, "test@test.com", testValue);
    expect(e.gitHub).toBe(testValue);
});

test("getGitHub() returns gitHub", () => {
    const testValue = "gitHubUser";
    const e = new Engineer("Foo", 50, "test@test.com", "gitHubUser");
    expect(e.getGitHub()).toBe(testValue);
});

test("getRole() returns 'Engineer'", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 50, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

