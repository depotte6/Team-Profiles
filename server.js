const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");


const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamMembersArray = [];


welcome(); 

function welcome() {
    console.log("Welcome to the team builder!");
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the team you are building?",
            name: "teamName"
        }
    ]).then(function(answer) {
        teamName = answer.teamName;
        console.log("Now you can add employees to your team!");
        addTeamMembers();
    });

}
function addTeamMembers() {
    inquirer.prompt([
        {
            type:"list",
            message: "What type of team member would you like to add now?",
            name: "employee",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "I don't have any more members to add."
            ]   
        }
    ])
    .then(function(answer) {
        if(answer.employee === "Manager") {
            managerPrompt();
        }
        else if(answer.employee === "Engineer") {
            engineerPrompt();
        }
        else if(answer.employee === "Intern") {
            internPrompt();
        } else {
            finalizeTeam();
            console.log("What a great team!");
        }
        function finalizeTeam() {
            var main = fs.readFileSync('./dist/index.html', 'utf8');
            //main  = main.replace('{{teamName}}', teamName);
            //main = main.replace('{{managerCard}}', managerCard);
            //s.writeFileSync('./dist/index.html', main);
            
            for ( var i = 0; i < teamMembersArray.length; i++) {
                var employee = teamMembersArray[i]; 
                renderEmployee(employee);
            }
            function renderEmployee(employee) {
                if(employee === "Manager") {
                    var managerCard = fs.readFileSync('src/Manager.html', 'utf8');
                    managerCard = managerCard.replace('{{name}}', employee.getName());
                    managerCard = managerCard.replace('{{role}}', employee.getRole());
                    managerCard = managerCard.replace('{{ID}}', employee.getID());
                    maangerCard = managerCard.replace('{{email}}', employee.getEmail());
                    managerCard = managerCard.replace('{{officeNumber}}', employee.getOfficeNumber());
                    fs.writeFileSync(managerCard); 

                    console.log(managerCard);
                }
                else if (employee === "Engineer") {
                    var engineerCard = fs.readFileSync('.src/Engineer.html', 'utf8');
                    engineerCard = engineerCard.replace('{{name}}', employee.getName());
                    engineerCard = engineerCard.replace('{{role}}', employee.getRole());
                    engineerCard = engineerCard.replace('{{ID}}', engineerID);
                    engineerCard = engineerCard.replace('{{email}}', engineerEmail);
                    engineerCard = engineerCard.replace('{{gitHub}}', engineerGitHub);
                    console.log(engineerCard);
                   return engineerCard;

                } else if (employee === "Intern") {
                    var internCard = fs.readFileSync('src/Intern.html', 'utf8');
                    internCard = internCard.replace('{{name}}', internName);
                    internCard = internCard.replace('{{role}}', employee.getRole());
                    internCard = internCard.replace('{{ID}}', internID);
                    internCard = internCard.replace('{{email}}', internEmail);
                    internCard = internCard.replace('{{school}}', internSchool);
                    //return internCard;
                }
                    main  = main.replace('{{teamName}}', teamName);
                    main = main.replace('{{managerCard}}', managerCard);
                    main = main.replace('{{engineerCard}}', engineerCard);
                    main = main.replace('{{internCard}}', internCard);
                    fs.writeFileSync('dist/index.html', main);
                //main.replace('{{managerCard}}', managerCard);
                //fs.writeFileSync('dist/index.html', '{{managerCard}}');
                //fs.writeFileSync('dist/index.html', '{{engineerCard}}');
                //fs.writeFileSync('dist/index.html', '{{internCard}}');

                
                
                console.log("main.html generated");
            }
        } 
    });

         
    function managerPrompt() {
                inquirer
                    .prompt([
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
                        let manager = new Manager(managerPrompt.managerName, managerPrompt.managerID, managerPrompt.managerEmail, managerPrompt.managerNumber);
                        teamMembersArray.push(manager);
                        addTeamMembers();
                    });
    };
                                
    function engineerPrompt() {
                inquirer
                    .prompt([
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
                        teamMembersArray.push(engineer);
                        addTeamMembers();
                    });                       
    }
                                
    function internPrompt() {
                inquirer
                    .prompt([
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
                        let intern = new Intern(internPrompt.internName, internPrompt.internID, internPrompt.internEmail, internPrompt.internSchool);
                        teamMembersArray.push(intern);
                        console.log(this);
                        addTeamMembers();
                    });

    }   
}
     