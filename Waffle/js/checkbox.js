/* function swapColor(boxID){
    var inputElem = document.getElementById(boxID);
    if (inputElem.classList[1] === "grayBox"){
        inputElem.classList.remove("grayBox")
        inputElem.classList.add("greenBox")
        return
    }
    if (inputElem.classList[1] === "greenBox"){
        inputElem.classList.remove("greenBox")
        inputElem.classList.add("yellowBox")
        return
    }
    if (inputElem.classList[1] === "yellowBox"){
        inputElem.classList.remove("yellowBox")
        inputElem.classList.add("grayBox")
        return
    }
}



function checkWaffleCompleteness(){
    var inputElems = ["box1_1", "box1_2", "box1_3", "box1_4", "box1_5", "box2_1", "box2_3", "box2_5", "box3_1", "box3_2", "box3_3", "box3_4", "box3_5", "box4_1", "box4_3", "box4_5", "box5_1", "box5_2", "box5_3", "box5_4", "box5_5"];
    let blankCounter = 0;
    inputElems.forEach(letterInput => {
        if (document.getElementById(letterInput).value.length != 1 && blankCounter === 0 ){
            blankCounter = 1;
         }
    })
    return blankCounter;
}


function getAllLetters(){
    var inputElems = ["box1_1", "box1_2", "box1_3", "box1_4", "box1_5", "box2_1", "box2_3", "box2_5", "box3_1", "box3_2", "box3_3", "box3_4", "box3_5", "box4_1", "box4_3", "box4_5", "box5_1", "box5_2", "box5_3", "box5_4", "box5_5"];
    var allLetters = []
    inputElems.forEach(letterInput => {
        newLetter = document.getElementById(letterInput).value;
        allLetters.push(newLetter);
    })
    return allLetters;
}

function getAllStates(){
    var inputElems = ["box1_1", "box1_2", "box1_3", "box1_4", "box1_5", "box2_1", "box2_3", "box2_5", "box3_1", "box3_2", "box3_3", "box3_4", "box3_5", "box4_1", "box4_3", "box4_5", "box5_1", "box5_2", "box5_3", "box5_4", "box5_5"];
    var allStates = []
    var classResourceList = ["grayBox", "greenBox", "yellowBox"]
    inputElems.forEach(stateInput => {
        newStateClass = document.getElementById(stateInput).classList[1];
        newState = classResourceList.indexOf(newStateClass);
        allStates.push(newState);
    })
    return allStates;
}

function getFloatingLetters(allLetters,allStates){
    var floatingLettersList = [];
    var i = 0;
    allStates.forEach(stateValue => {
        if (allStates[i] != 1){
            floatingLettersList.push(allLetters[i]);
        }
        i++;
    })
    return floatingLettersList;
}

function form6(biglist){
    var set1 = [biglist[0], biglist[1], biglist[2], biglist[3], biglist[4]];
    var set2 = [biglist[8], biglist[9], biglist[10], biglist[11], biglist[12]];
    var set3 = [biglist[16], biglist[17], biglist[18], biglist[19], biglist[20]];
    var set4 = [biglist[0], biglist[5], biglist[8], biglist[13], biglist[16]];
    var set5 = [biglist[2], biglist[6], biglist[10], biglist[14], biglist[18]];
    var set6 = [biglist[4], biglist[7], biglist[12], biglist[15], biglist[20]];
    var allSets = [set1, set2, set3 ,set4, set5, set6];
    return allSets;
}

function generate3Lists(sixWords,sixStates){
    var qListGood = [[],[],[],[],[],[]];
    var qListBad = [[],[],[],[],[],[]];
    var qListYellow = [[],[],[],[],[],[]];
    for (let i = 0; i < 6; i++) {
        for (let j=0; j<5; j++) {
            qListGood[i][j] = "?"; qListBad[i][j] = "?"; qListYellow[i][j] = "?";
            if (sixStates[i][j] === 0){
                qListBad[i][j] = sixWords[i][j];
            }                    
            if (sixStates[i][j] === 1){
                qListGood[i][j] = sixWords[i][j];
            }            
            if (sixStates[i][j] === 2){
                qListYellow[i][j] = sixWords[i][j];
            }
        }
    }
    return {qListGood, qListBad, qListYellow};
}

function MakeAllFakeWords(qListGood, qListBad, qListYellow, floatingLetters) {
    var AllFakeWords = [[], [], [], [], [], []];
    var AllActualWords = [[], [], [], [], [], []];

    // Assuming your local list is an array of words
    const acceptableWords = JSON.parse(localStorage.getItem("wordsJSON")) || [];
    console.log(acceptableWords);
    
    for (let i = 0; i < 6; i++) {
        var tempWords = generateWordsForOneWord(floatingLetters, qListGood[i]);
        var tempQListBad = removeQuestionMarks(qListBad[i]);
        var tempQListYellowAll = remove135Entries(qListYellow[i]);
        var tempQListYellow = removeQuestionMarks(tempQListYellowAll);

        // Filter words based on the local list of acceptable words
        AllFakeWords[i] = tempWords.filter(word => acceptableWords.includes(word) && filterWords(word, qListGood[i], tempQListYellow, tempQListBad));
    }

    console.log('Actual Word Frequencies:', AllActualWords);
    return AllFakeWords;
}

function removeQuestionMarks(list) {
    return list.filter(item => item !== '?');
}
function remove135Entries(neededLetters) {
    return neededLetters.filter((_, index) => index % 2 !== 0);
}

function generateWordsForOneWord(wordBank, wordPattern) {
    const allFakeWordsSet = new Set();

    function generateWordsHelper(currentWord, currentIndex, letterCounts) {
        if (currentIndex === 5) {
            allFakeWordsSet.add(currentWord.join(''));
            return;
        }

        const currentPatternChar = wordPattern[currentIndex];
        const availableLetters = currentPatternChar === '?' ? wordBank : [currentPatternChar];

        for (const letter of availableLetters) {
            if (letterCounts.get(letter) > 0 || currentPatternChar !== '?') {
                const newCounts = new Map(letterCounts);
                newCounts.set(letter, newCounts.get(letter) - 1);
                generateWordsHelper([...currentWord, letter], currentIndex + 1, newCounts);
            }
        }
    }

    // Count the occurrences of each letter in the word bank
    const letterCounts = new Map();
    for (const letter of wordBank) {
        letterCounts.set(letter, (letterCounts.get(letter) || 0) + 1);
    }

    generateWordsHelper([], 0, letterCounts);

    // Convert the Set back to an array to match your original return type
    return Array.from(allFakeWordsSet);
}

function filterWords(wordList, wordPattern, requiredLetters, forbiddenLetters) {
    return wordList.filter(word => {
        // Check if the word matches the pattern
        const matchesPattern = word.split('').every((letter, index) => {
            return wordPattern[index] === '?' || wordPattern[index] === letter;
        });

        // Check if the word contains all required letters
        const hasRequiredLetters = requiredLetters.every(letter => word.includes(letter));

        // Check if the word contains any forbidden letters
        const doesNotHaveForbiddenLetters = forbiddenLetters.every(forbiddenLetter => {
            // Check if the forbidden letter is in the word pattern
            return !wordPattern.includes(forbiddenLetter) || word.includes(forbiddenLetter);
        });

        // Keep the word if it meets the criteria
        return matchesPattern && hasRequiredLetters && doesNotHaveForbiddenLetters;
    });
}

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

*/