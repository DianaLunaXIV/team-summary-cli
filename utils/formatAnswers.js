function formatAnswers(answersArray) {
  //create a function that generates the cards in the array,
  //then grab the return of that function and drop it in HTML
  const managersArray = answersArray.filter((answer) => answer.role === "manager").sort((managerA, managerB) => managerA.name.localeCompare(managerB.name));;
  const internsArray = answersArray.filter((answer) => answer.role === "intern").sort((internA, internB) => internA.name.localeCompare(internB.name));
  const engineersArray = answersArray.filter((answer) => answer.role === "engineer").sort((engineerA, engineerB) => engineerA.name.localeCompare(engineerB.name));

  const createEmployeeCard = (employeeArray) => {
    return employeeArray.map((employee) => {
    if (employee.role === "intern"){
    return `
    <div class="card col-4">
      <div class="card-body">
        <h3 class="card-header bg-info">${employee.name}</h3>
        <h4 class="card-header bg-info">${employee.role}</h4>
        <li class="list-group-item mx-auto">Employee ID: ${employee.ID}</p>
        <li class="list-group-item mx-auto">Employee Email: ${employee.email}</p>
        <li class="list-group-item mx-auto">School: ${employee.school}</p>
      </div>
    </div>
    `
    } else if (employee.role === "engineer"){
      return `
      <div class="card col-4">
        <div class="card-body">
          <h3 class="card-header bg-info">${employee.name}</h3>
          <h4 class="card-header bg-info">${employee.role}</h4>
          <li class="list-group-item mx-auto">Employee ID: ${employee.ID}</p>
          <li class="list-group-item mx-auto">Employee Email: ${employee.email}</p>
          <li class="list-group-item mx-auto">School: ${employee.GitHub}</p>
        </div>
      </div>
      ` 
    } else {
      return `
      <div class="card col-4">
        <div class="card-body">
          <h3 class="card-header bg-info">${employee.name}</h3>
          <h4 class="card-header bg-info">${employee.role}</h4>
          <li class="list-group-item mx-auto">Employee ID: ${employee.ID}</p>
          <li class="list-group-item mx-auto">Employee Email: ${employee.email}</p>
          <li class="list-group-item mx-auto">School: ${employee.officeNumber}</p>
        </div>
      </div>
      ` 
    }
  }
  ).join("\n")
}

const templateHTML = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    </head>
    <body>
        <nav class="navbar navbar-dark bg-primary mt-2 mb-4">
            <h1 class="navbar-brand my-auto mx-auto">Team Summary</p>
        </nav>



        <div class="container">
            <div class="row">
                ${createEmployeeCard(managersArray)}
                ${createEmployeeCard(internsArray)}
                ${createEmployeeCard(engineersArray)}
            </div>

        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </body>
</html>`
console.log(templateHTML)
return templateHTML
  // console.log("Manager:");
  // console.log(createEmployeeCard(managersArray))
  // console.log("Interns:");
  // console.log(createEmployeeCard(internsArray))
  // console.log("Engineers:")
  // console.log(createEmployeeCard(engineersArray))
  // console.log(internsArray);
  // console.log("Engineers:");
  // console.log(engineersArray);
}
module.exports = formatAnswers;
