const inquirer = require("inquirer");
const fs = require("fs");
const formatAnswers = require("./utils/formatAnswers");
const initialQuestions = [
  {
    type: "input",
    name: "name",
    message: `Enter the team manager's name here.`,
  },
  {
    type: "input",
    name: "ID",
    message: `Enter the team manager's employee ID here.`,
  },
  {
    type: "input",
    name: "email",
    message: `Enter the team manager's e-mail address here.`,
  },
  {
    type: "input",
    name: "officeNumber",
    message: `Enter the team manager's office number here.`,
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: `Enter the engineer's name here.`,
  },
  {
    type: "input",
    name: "ID",
    message: `Enter the engineer's employee ID here.`,
  },
  {
    type: "input",
    name: "email",
    message: `Enter the engineer's e-mail address here.`,
  },
  {
    type: "input",
    name: "GitHub",
    message: `Enter the engineer's GitHub username here.`,
  },
];
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: `Enter the intern's name here.`,
  },
  {
    type: "input",
    name: "ID",
    message: `Enter the intern's ID here.`,
  },
  {
    type: "input",
    name: "email",
    message: `Enter the intern's e-mail address here.`,
  },
  {
    type: "input",
    name: "school",
    message: `Enter the intern's school here.`,
  },
];
const promptMore = [
  {
    type: "list",
    name: "moreResponse",
    choices: [
      "Add an intern",
      "Add an engineer",
      "No, my team has been entered!",
    ],
    message: `Do you want to add any more team members?`,
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(data);
    console.log(
      `Your team summary page has been saved to the program's installation directory. Thank you for using team-summary-cli!`
    );
  });
}

async function questionPrompter() {
  let allAnswers = [];
  const initialAnswers = await inquirer.prompt(initialQuestions);
  initialAnswers.role = "manager";
  console.log(initialAnswers);
  allAnswers.push(initialAnswers);
  console.log(allAnswers);
  let continuePrompting = await inquirer.prompt(promptMore);
  console.log(continuePrompting);
  while (continuePrompting.moreResponse !== "No, my team has been entered!") {
    switch (continuePrompting.moreResponse) {
      case "Add an intern":
        const internPrompt = await inquirer.prompt(internQuestions);
        internPrompt.role = "intern";
        console.log(internPrompt);
        allAnswers.push(internPrompt);
        console.log(allAnswers);
        continuePrompting = await inquirer.prompt(promptMore);
        continue;
      case "Add an engineer":
        const engineerPrompt = await inquirer.prompt(engineerQuestions);
        engineerPrompt.role = "engineer";
        console.log(engineerPrompt);
        allAnswers.push(engineerPrompt);
        console.log(allAnswers);
        continuePrompting = await inquirer.prompt(promptMore);
        continue;
      default:
        continue;
    }
  }
  console.log(`Responses:`);
  console.log(allAnswers);
  return allAnswers;
}

//questionPrompter()
async function init() {
  const responses = await questionPrompter();
  writeToFile('test.html', formatAnswers(responses));
}

init();
