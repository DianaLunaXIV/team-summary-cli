const inquirer = require('inquirer');
const fs = require('fs');
const formatResponses = require('');
const questions = [];




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