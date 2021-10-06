const generateTeam = team => {

    const generateManager = manager => {
        return `
            <div class="card">
                <div class="card-header">
                 <div class = "card heading"></div>
                    ${manager.getName()}
                </div>
            <div class="cardrole">
                {role}}
                </div>
            </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getID()}</li>
                <li class="list-group-item">Email: <a href=${manager.getEmail()}}></a></li>
                <li class="list-group-item">Office Number: ${manager.getNumber()}}></a> </li>
            </ul>
        </div>
        </div>`;
        }
    const generateEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">${engineer.getName()}</h1>
                <h2 class="card-title">${engineer.role}</h2>
            </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getID()}</li>
                <li class="list-group-item">Email: <a href=${engineer.getEmail()}></a></li>
                <li class="list-group-item">GitHub: <a href="http:///github.com/" + ${engineer.getGitHub}></a> </li>
             </ul>
        </div>
        </div>`
    }
    const generateIntern = intern => {
        return `
        <div class="card">
        <div class="card-header">
            <h1 class="card-title">${intern.getName()}</h1>
            <h2 class="card-title">${intern.getRole()}</h2>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getID()}</li>
                <li class="list-group-item">Email: <a href=${intern.getEmail()}></li>
                <li class="list-group-item">School: ${intern.getSchool()}></a> </li>
            </ul>
        </div>
    </div>
        `
    }

    const html = [];
    html.push(team
        .filter(employee=> employee.getRole() === "Manager")
        .map(manager => generaterManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    return html.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href = "style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Team-Profile</title>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="column-12">
                    <h1 class="text-center">Meet My Team</h1>
                    <h2>
                        {{teamName}}
                    </h2>
                </div>
            </div>
            <div class="containter">
                <div class="row">
                    <div class="column-12">
                        ${generateTeam(team)}
                </div>
            </div>
        </div>
    
    </body>
    </html>
    `
}

