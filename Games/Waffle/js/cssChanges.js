function swapColor(boxID){
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

function greenAns() {
    // Select all divs with the class 'specialBackground'
    var divs = document.querySelectorAll(".ansBox");

    // Loop through the divs and add the 'greenBackground' class
    divs.forEach(function(div) {
        div.classList.remove("grayBox")
        div.classList.add("greenBox");
    });
};