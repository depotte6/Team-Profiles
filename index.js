const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const Employees = [];

buildTeam();


function buildTeam() {
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
    .then(function (managerPrompt) {
        const manager = new Manager(managerPrompt.managerName, managerPrompt.managerID, managerPrompt.managerEmail, managerPrompt.managerNumber);
        Employees.push(manager);

        addTeamMembers();
    
        function addTeamMembers() {
            inquirer.prompt([
                {
                    type:"list",
                    message: "What type of team member would you like to add now?",
                    name: "employee",
                    choices: [
                        "Engineer",
                        "Intern",
                        "I don't have any more memebers to add."
                    ]   
                }
            ])
                
                .then(function(teamAnswer) {
                    if(teamAnswer.employee === "Engineer") {
                
                    engineerPrompt();
                    }
            

                    function engineerPrompt() {
                        inquirer.prompt([
                            {
                                type: "input",
                                message: "What is your engineer's name?",
                                name: "engineerName"
                            },
                            {
                                type: "input",
                                message: "What is your engineer's ID?",
                                name: "engineerID"
                            },
                            {
                                type: "input",
                                message: "What is your engineer's email?",
                                name: "engineerEmail"
                            },
                            {
                                type: "input",
                                message: "What is your engineer's GitHub username?",
                                name: "engineerGitHub"
                            }
                        ])
                            .then(function (engineerPrompt) {
                                const engineer = new Engineer(engineerPrompt.engineerName, engineerPrompt.engineerID, engineerPrompt.engineerEmail, engineerPrompt.engineerGitHub);
                                Employees.push(engineer);
                                addTeamMembers();
                            });
                        
                        } if (teamAnswer.employee === "Intern") { 
                                
                            internPrompt();    
                    }               
                        
                            function internPrompt() {
                            inquirer.prompt([
                            {
                                type: "input",
                                message: "What is your intern's name?",
                                name: "internName"
                            },
                            {
                                type: "input",
                                message: "What is your intern's ID?",
                                name: "internID"
                            },
                            {
                                type: "input",
                                message: "What is your intern's email?",
                                name: "internEmail"
                            },
                            {
                                type: "input",
                                message: "Where does your intern attent school?",
                                name: "internSchool"
                            }
                            ])
                                .then(function(internPrompt) {
                                const intern = new Intern(internPrompt.internName, internPrompt.internID, internPrompt.internEmail, internPrompt.internSchool);
                                Employees.push(intern);
                                addTeamMembers();
                            });
                        }

                    });

                    if (teamAnswer.employee === "I don't have any more memebers to add.") { 
                        writeHTML();
                }
                function writeHTML() {
                    let html = render(employees);

                    fs.writeFile(outPath, html => {
                        console.log("sucess!");
                    });
                }
                 
        }    });}
