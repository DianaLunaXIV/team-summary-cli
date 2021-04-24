function formatAnswers(answersArray) {
  //create a function that generates the cards in the array,
  //then grab the return of that function and drop it in HTML
  const managerObject = answersArray[0];
  const internsArray = answersArray.filter((answer) => answer.internName);
  const engineersArray = answersArray.filter((answer) => answer.engineerName);

  console.log("Manager:");
  console.log(managerObject);
  console.log("Interns:");
  console.log(internsArray);
  console.log("Engineers:");
  console.log(engineersArray);
}
module.exports = formatAnswers;
