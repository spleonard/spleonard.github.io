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