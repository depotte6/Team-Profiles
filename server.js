const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/team.js");
const teamMembers = [];


function welcome() {

        function createManager() {
            console.log("Welcome! Begin to build your team");
            inquirer.prompt([
                    {
                        type: "input",
                        message: "What is the manager's name?",
                        name: "managerName",
                        validate: answer => {
                            if (answer !== "") {
                            return true;
                            }
                            return "Please enter manager's name";
                        }
                    },
                    {
                        type: "input",
                        message: "What is your manager's ID?",
                        name: "managerID",
                    },
                    {
                        type: "input",
                        message: "What is your manager's email?",
                        name: "managerEmail",
                    },
                    {
                        type: "input",
                        message: "What is your manager's phone number?",
                        name: "officeNumber"
                    }
                ])
                .then(answers => {
                    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
                    console.log(manager);
                    teamMembers.push(manager);
                    addTeamMembers();
                });
        };

        function addTeamMembers() {
            inquirer.prompt([
                {
                    type:"list",
                    message: "What type of team member would you like to add now?",
                    name: "employee",
                    choices: [
                        "Engineer",
                        "Intern",
                        "I don't have any more members to add."
                    ]   
                }
            ])
            .then(answer => {
                switch(answer.employee) {
                    case "Engineer": 
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    default:
                        buildTeam();
                
                }
            });
        };
    
        function addEngineer() {
            inquirer
            .prompt([{
                    type: "input",
                    message: "What is your engineer's name?",
                    name: "engineerName",
                    validate: answer => {
                        if(answer !== '') {
                            return true;
                        }
                        return "Enter your engineer's name"
                    }
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
            .then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
                console.log(engineer);
                teamMembers.push(engineer);
                addTeamMembers();
            });
        };
    
        function addIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your intern's name?",
                    name: "internName",
                },
                {
                    type: "input",
                    message: "What is your intern's ID?",
                    name: "internID",
                },
                {
                    type: "input",
                    message: "What is your intern's email?",
                    name: "internEmail",
                },
                {
                    type: "input",
                    message: "Where does your intern attent school?",
                    name: "internSchool",
                }
            ])
            .then(answers => {
                const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
                console.log(intern);
                teamMembers.push(intern);
                addTeamMembers();
            });
       
        
        };
        
        // function writes the html for the website 
        function buildTeam() {
            // Create the output directory if the output path doesn't exist
            if (!fs.existsSync(OUTPUT_DIR)) {
              fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
        };
        
        createManager();
        
};
        

welcome();

