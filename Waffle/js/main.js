
function solveWaffle(){
    //Check Completeness of Grid. Return error 1 if incomplete.
    const checkCompleteness = checkWaffleCompleteness();
    if (checkCompleteness === 1) {
        alert("Please enter one character per square before clicking Solve!");
        return 1;
    };

    //generate letters and values list.
      //Gain Input to Word Lists
    const allLetters = getAllLetters();
    const allStates = getAllStates();
    var floatingLetters = getFloatingLetters(allLetters,allStates);
    
    var sixWords = form6(allLetters);
    var sixStates = form6(allStates);
      //Generate Output of Word Lists
    const {qListGood, qListBad, qListYellow} = generate3Lists(sixWords,sixStates);
    allPossibleWords = MakeAllFakeWords(qListGood, qListBad, qListYellow, floatingLetters);
    //console.log(allPossibleWords);
    printToGrid(allPossibleWords);

      //Arrange Possible Words to Final Pattern

    //iterateGrid(allPossibleWords);
    var counter = 0;
    var spareLetters = ["notempty"]
    while (counter < 5 || spareLetters == []){
        var spareLetters = compareGrids();
        let {allLetters: letters, allStates: states} = getAllLettersAgain(spareLetters);
        var sixWords = form6(letters);
        var sixStates = form6(states);
        const {qListGood, qListBad, qListYellow} = generate3Lists(sixWords,sixStates);
        console.log("Bad:"+qListBad);
        console.log("Yellow:"+qListYellow);
        console.log("Good:"+qListGood);
        allPossibleWords = MakeAllFakeWords(qListGood, qListBad, qListYellow, spareLetters);
        printToGrid(allPossibleWords);
        counter++
    }

    greenAns();
}