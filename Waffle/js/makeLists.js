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