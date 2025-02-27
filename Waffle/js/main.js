function solveWaffle() {
  // Check Completeness of Grid. Return error 1 if incomplete.
  const checkCompleteness = checkWaffleCompleteness();
  if (checkCompleteness === 1) {
      alert("Please enter one character per square before clicking Solve!");
      return 1;
  }

  // Generate letters and values list.
  var allLetters = getAllLetters();
  var allStates = getAllStates();
  var floatingLetters = getFloatingLetters(allLetters, allStates);

  var sixWords = form6(allLetters);
  var sixStates = form6(allStates);

  // Generate Output of Word Lists
  var { qListGood, qListBad, qListYellow } = generate3Lists(sixWords, sixStates);
  allPossibleWords = MakeAllFakeWords(qListGood, qListBad, qListYellow, floatingLetters);
  console.log("Initial possible words:", allPossibleWords);
  printToGrid(allPossibleWords);

  // Arrange Possible Words to Final Pattern
  var counter = 0;
  var spareLetters = ["not","empty"];

  // Fix the while loop condition
  while (counter < 5 && spareLetters.length > 1) {
      console.log("Counter:", counter);
      var spareLetters = compareGrids();  // Update spareLetters
      //console.log("Before getAllLettersAgain, spareletters:",spareLetters);

      let result = getAllLettersAgain(spareLetters, sixStates);
      var letters = result.allLetters;
      var states = result.allStateResult;  // Updated states after getAllLettersAgain

      // Ensure states are being passed correctly
      var sixWords = form6(letters);
      var sixStates = states;

      var { qListGood, qListBad, qListYellow } = generate3Lists(sixWords, sixStates);
      allPossibleWords = MakeAllFakeWords(qListGood, qListBad, qListYellow, spareLetters);
      console.log("Looped possible words:", allPossibleWords);
      
      printToGrid(allPossibleWords);
      counter++;
  }

  greenAns();
}
