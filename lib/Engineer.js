const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, ID, email, gitHub) {
        super(name, ID, email);
        this.gitHub = gitHub;
    }

    getgitHub() {
        return this.gitHub;
    }

    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;