const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    it("Can add github with constructor", () => {
        const testValue = "GitHubUser";
        const Eng = new Engineer("Foo", 1, "test@test.com", testValue);
        expect(Eng.gitHub).toBe(testValue);
    });
});
