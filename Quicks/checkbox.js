function checkfunction(a,b) {

    var check = document.getElementById(a);
    var cross = document.getElementById(b);
    if(check.checked == true){
        cross.style.display = "flex";
    }
    else {
        cross.style.display = "none";
    }
}



function tallyChecks(cname,scoreBox){
    var inputElems = document.getElementsByTagName("input");
    count = 0;
    for (var i=0; i<inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].className === cname && inputElems[i].checked === true){
        count++;
    }
}
var score = document.getElementById(scoreBox);
score.innerHTML = count*(count+1)/2;
finalScore();
}

function tallyPenaltyChecks(cname){
    var inputElems = document.getElementsByTagName("input");
    count = 0;
    for (var i=0; i<inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].className === cname && inputElems[i].checked === true){
        count++;
    }
}
var score = document.getElementById("penaltyScore");
score.innerHTML = count*5;
finalScore();
}



function finalScore(){
    var redScore = document.getElementById("redScore");
    var yellowScore = document.getElementById("yellowScore");
    var greenScore = document.getElementById("greenScore");
    var blueScore = document.getElementById("blueScore");
    var penaltyScore = document.getElementById("penaltyScore");
    var finalScore = document.getElementById("finalScore");
    finalScore.innerHTML = parseInt(redScore.innerHTML) + parseInt(yellowScore.innerHTML) + parseInt(greenScore.innerHTML) + parseInt(blueScore.innerHTML) - parseInt(penaltyScore.innerHTML);
}

function LentilSoupAd(){
  // Go to the Recipe Page
    window.location.assign('https://www.ziyad.com/recipe/red-lentil-soup/');
}