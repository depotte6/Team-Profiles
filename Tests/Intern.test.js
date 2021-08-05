const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("can add school with constructor", () => {
        const testValue = "MSU";
        const Int = new Intern("Foo", 1, "test@test.com", testValue);
        expect(Int.school).toBe(testValue);
    });
});