const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    it("Can add github with constructor", () => {
        const testValue = "GitHubUser";
        const Eng = new Engineer("Foo", 50, "test@test.com", testValue);
        expect(Eng.gitHub).toBe(testValue);
    });

    it("getRole() returns 'Engineer'", () => {
        const testValue = "Engineer";
        const Eng = new Engineer("Foo", 50, "test@test.com", "GitHubUser");
        expect(Eng.getRole()).toBe(testValue);
    });
});
