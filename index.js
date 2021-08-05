const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const Employees = [];

managerInfo();

function managerInfo() {

    inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is your manager's ID?",
            name: "managerID"
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is your manager's phone number?",
            name: "managerNumber"
        }
    ])
        .then(function (manInfo) {
            const manager = new Manager(manInfo.managerName, manInfo.managerID, manInfo.managerEmail, manInfo.managerNumber);
            Employees.push(manager);
        });
}
