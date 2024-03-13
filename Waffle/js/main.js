
function solveWaffle(){
    //Check Completeness of Grid. Return error 1 if incomplete.
    const checkCompleteness = checkWaffleCompleteness();
    if (checkCompleteness === 1) {
        alert("Please enter one character per square before clicking Solve!");
        return 1;
    };

    //generate letters and values list.
    const allLetters = getAllLetters();
    const allStates = getAllStates();
    var floatingLetters = getFloatingLetters(allLetters,allStates);
    
    var sixWords = form6(allLetters);
    var sixStates = form6(allStates);
    
    const {qListGood, qListBad, qListYellow} = generate3Lists(sixWords,sixStates);
    MakeAllFakeWords(qListGood, qListBad, qListYellow, floatingLetters);

    //allWordsOriginal = generateWords();
    //allStatesOriginal = generateStates();

    //???
}