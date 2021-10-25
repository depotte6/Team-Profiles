const html = [];

const initiateTeam = team => {

const initiateManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h1 class = "card-title" id ="name">${manager.getName()}</h1>
                <h2 class="card-title" id="role">${manager.getRole()}</h2>
            </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getID()}</li>
                <li class="list-group-item">Email:<a href="mailto:"${manager.getEmail()}> ${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getNumber()} </li>
            </ul>
        </div>
        </div>`
        
    }
    const initiateEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">${engineer.getName()}</h1>
                <h2 class="card-title">${engineer.getRole()}</h2>
            </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getID()}</li>
                <li class="list-group-item">Email: <a href="mailto:"${engineer.getEmail()}>${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: ${engineer.getGitHub()} </li>
             </ul>
        </div>
        </div>`
    }
    const initiateIntern = intern => {
        return `
        <div class="card">
        <div class="card-header">
            <h1 class="card-title">${intern.getName()}</h1>
            <h2 class="card-title">${intern.getRole()}</h2>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getID()}</li>
                <li class="list-group-item">Email: <a href="mail to:"${intern.getEmail()}> ${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `
    }

 
    html.push(team
        .filter(employee=> employee.getRole() === "Manager")
        .map(manager => initiateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => initiateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => initiateIntern(intern))
        .join("")
    );
    return html.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
       
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 justify-content-center d-flex">
                    ${initiateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
        `;
    };
    