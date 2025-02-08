/*function iterateGrid(words){
    var counter = 0;
    printToGrid(words);
    var spareLetters = compareGrids();
    var letters, states = getAllLettersAgain(spareLetters);
    var sixWords = form6(allLetters);
    var sixStates = form6(allStates);
    const {qListGood, qListBad, qListYellow} = generate3Lists(sixWords,sixStates);
    allPossibleWords = MakeAllFakeWords(qListGood, qListBad, qListYellow, floatingLetters);
}*/

function printToGrid(words){
    var outputElems = ["box1_1s", "box1_2s", "box1_3s", "box1_4s", "box1_5s", "box2_1s", "box2_3s", "box2_5s", "box3_1s", "box3_2s", "box3_3s", "box3_4s", "box3_5s", "box4_1s", "box4_3s", "box4_5s", "box5_1s", "box5_2s", "box5_3s", "box5_4s", "box5_5s"];
    if (words[0].length == 1){
        document.getElementById(outputElems[0]).value = words[0][0][0];
        document.getElementById(outputElems[1]).value = words[0][0][1];
        document.getElementById(outputElems[2]).value = words[0][0][2];
        document.getElementById(outputElems[3]).value = words[0][0][3];
        document.getElementById(outputElems[4]).value = words[0][0][4];
    }    
    if (words[1].length == 1){
        document.getElementById(outputElems[8]).value = words[1][0][0];
        document.getElementById(outputElems[9]).value = words[1][0][1];
        document.getElementById(outputElems[10]).value = words[1][0][2];
        document.getElementById(outputElems[11]).value = words[1][0][3];
        document.getElementById(outputElems[12]).value = words[1][0][4];
    }
    if (words[2].length == 1){
        document.getElementById(outputElems[16]).value = words[2][0][0];
        document.getElementById(outputElems[17]).value = words[2][0][1];
        document.getElementById(outputElems[18]).value = words[2][0][2];
        document.getElementById(outputElems[19]).value = words[2][0][3];
        document.getElementById(outputElems[20]).value = words[2][0][4];
    }
    if (words[3].length == 1){
        document.getElementById(outputElems[0]).value = words[3][0][0];
        document.getElementById(outputElems[5]).value = words[3][0][1];
        document.getElementById(outputElems[8]).value = words[3][0][2];
        document.getElementById(outputElems[13]).value = words[3][0][3];
        document.getElementById(outputElems[16]).value = words[3][0][4];
    }
    if (words[4].length == 1){
        document.getElementById(outputElems[2]).value = words[4][0][0];
        document.getElementById(outputElems[6]).value = words[4][0][1];
        document.getElementById(outputElems[10]).value = words[4][0][2];
        document.getElementById(outputElems[14]).value = words[4][0][3];
        document.getElementById(outputElems[18]).value = words[4][0][4];
    }
    if (words[5].length == 1){
        document.getElementById(outputElems[4]).value = words[5][0][0];
        document.getElementById(outputElems[7]).value = words[5][0][1];
        document.getElementById(outputElems[12]).value = words[5][0][2];
        document.getElementById(outputElems[15]).value = words[5][0][3];
        document.getElementById(outputElems[20]).value = words[5][0][4];
    }
    //Keep good letters that arent just in a word
        var inputElems = ["box1_1", "box1_2", "box1_3", "box1_4", "box1_5", "box2_1", "box2_3", "box2_5", "box3_1", "box3_2", "box3_3", "box3_4", "box3_5", "box4_1", "box4_3", "box4_5", "box5_1", "box5_2", "box5_3", "box5_4", "box5_5"];
        inputElems.forEach((stateInput, i) => {
            if(document.getElementById(stateInput).classList[1] == "greenBox"){
                document.getElementById(outputElems[i]).value = document.getElementById(inputElems[i]).value;
            }
        })    
}

function compareGrids() {
    let nonShared = [];

    var inputElems = ["box1_1", "box1_2", "box1_3", "box1_4", "box1_5", "box2_1", "box2_3", "box2_5", "box3_1", "box3_2", "box3_3", "box3_4", "box3_5", "box4_1", "box4_3", "box4_5", "box5_1", "box5_2", "box5_3", "box5_4", "box5_5"];
    var allLettersIn = [];
    inputElems.forEach(letterInput => {
        let newLetterIn = document.getElementById(letterInput).value; // Declare properly with let
        allLettersIn.push(newLetterIn);
    });

    var outputElems = ["box1_1s", "box1_2s", "box1_3s", "box1_4s", "box1_5s", "box2_1s", "box2_3s", "box2_5s", "box3_1s", "box3_2s", "box3_3s", "box3_4s", "box3_5s", "box4_1s", "box4_3s", "box4_5s", "box5_1s", "box5_2s", "box5_3s", "box5_4s", "box5_5s"];
    var allLettersOut = [];
    outputElems.forEach(letterOutput => {
        let newLetterOut = document.getElementById(letterOutput).value; // Declare properly with let
        allLettersOut.push(newLetterOut);
    });

    // Create a frequency map for input and output letters
    const letterCountIn = {};
    const letterCountOut = {};

    allLettersIn.forEach(letter => {
        letterCountIn[letter] = (letterCountIn[letter] || 0) + 1;
    });

    allLettersOut.forEach(letter => {
        letterCountOut[letter] = (letterCountOut[letter] || 0) + 1;
    });

    // Compare the frequency of each letter in input and output
    Object.keys(letterCountIn).forEach(letter => {
        const countInInput = letterCountIn[letter];
        const countInOutput = letterCountOut[letter] || 0; // Default to 0 if not in output

        // If the input contains more of the letter than the output, push the excess count to nonShared
        if (countInInput > countInOutput) {
            let excessCount = countInInput - countInOutput;
            for (let i = 0; i < excessCount; i++) {
                nonShared.push(letter);
            }
        }
    });

    return nonShared; // This will log unused letters
}


function getAllLettersAgain(spareLetters){
    var outputElems = ["box1_1s", "box1_2s", "box1_3s", "box1_4s", "box1_5s", "box2_1s", "box2_3s", "box2_5s", "box3_1s", "box3_2s", "box3_3s", "box3_4s", "box3_5s", "box4_1s", "box4_3s", "box4_5s", "box5_1s", "box5_2s", "box5_3s", "box5_4s", "box5_5s"];
    var allLetters = [];
    var allStates = [];
    var spareLetterIndex = 0;
    outputElems.forEach(letterInput => {
        newLetter = document.getElementById(letterInput).value;
        if (newLetter == ""){
            allStates.push(0);
            newLetter = spareLetters[spareLetterIndex];
            spareLetterIndex++;
        }
        else {
            allStates.push(1)
        }
        allLetters.push(newLetter);
    })
    return {allLetters, allStates};
}
