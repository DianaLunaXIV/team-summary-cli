const inquirer = require('inquirer');
const fs = require('fs');
const formatResponses = require('');
const initialQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: `Enter the team manager's name here.`
    },
    {
        type: 'input',
        name: 'managerEmployeeID',
        message: `Enter the team manager's employee ID here.`
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: `Enter the team manager's e-mail address here.`
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: `Enter the team manager's office number here.`
    }
];
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: `Enter the engineer's name here.`
    },
    {
        type: 'input',
        name: 'engineerEmployeeID',
        message: `Enter the engineer's employee ID here.`
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: `Enter the engineer's e-mail address here.`
    },
    {
        type: 'input',
        name: 'engineerOffice',
        message: `Enter the engineer's office number here.`
    }
];
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: `Enter the intern's name here.`
    },
    {
        type: 'input',
        name: 'internID',
        message: `Enter the intern's ID here.`
    },
    {
        type: 'input',
        name: 'internEmail',
        message: `Enter the intern's e-mail address here.`
    },
    {
        type: 'input',
        name: 'internSchool',
        message: `Enter the intern's school here.`
    }
];
const promptMore = [
    {
        type: 'list',
        name: 'moreResponse',
        choices: ["Add an intern", "Add an engineer", "No, my team has been entered!"],
        message: `Do you want to add any more team members?`
    }
];




function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(data);
        console.log(`Your team summary page has been saved to the program's installation directory. Thank you for using team-summary-cli!`);
    })
}

function init(){
    inquirer.prompt(questions)
    .then(answers => writeToFile('teamSummary.html', formatReponses(answers)))
}

init()