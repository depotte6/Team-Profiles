class Employee {
    constructor(name, ID, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Name should be a string");
        }

        this.name = name;
        this.ID = ID;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        console.log(`Employee Name: ${this.name}`);
        return this.ID;
    }

    getEmail() {
        console.log(`Employee E-mail: ${this.email}`);
        return this.email;
    }

    getRole() {
        console.log(`Employee Role: ${this.getRole}`);
        return "Employee";
    }
}
module.exports = Employee;