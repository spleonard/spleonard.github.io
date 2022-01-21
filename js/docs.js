/* This function saves the name of the clicked button */
function ButtonX_Click(pageRequest) {
    /* Saves and logs the selected value as a local variable*/
    localStorage.setItem("recipeSelected",pageRequest);
    console.log(pageRequest + " was the selection");

    /* Updates other local variables */
    updateVariables();
}

/* This function saves all subset categories of the Json file as local variables */
function updateVariables() {
    /* Call and log the full Json file (formed in recipeJson.js) */
    const fullRecipeJson = localStorage.getItem("recipeJson");
    const parsedRecipeJson = JSON.parse(fullRecipeJson);

    /* Retrieve the recipe name and simplify the Json file to only include relevant data */
    const recipeChosen = localStorage.getItem("recipeSelected");
    let RJson = parsedRecipeJson[recipeChosen];

    /* Save all relevant data as new local variables */
    localStorage.setItem("recipeIngredients",RJson.ingredients);
    console.log(RJson.ingredients);
    localStorage.setItem("recipeLink",RJson.link);
    localStorage.setItem("recipeMaterials",RJson.materials);
    localStorage.setItem("recipeName",RJson.name);
    localStorage.setItem("recipeServings",RJson.servings);
    localStorage.setItem("recipeSteps",RJson.steps);
    localStorage.setItem("recipeTime",RJson.time);
}

function populateMenu(containerName){
    const retrievedJson = localStorage.getItem("tempJson");
    console.log(retrievedJson);
    const jsonObj = JSON.parse(retrievedJson);
    var count = Object.keys(jsonObj.jsonList).length;
    console.log(count);
    var container= document.getElementById(containerName); // reference to containing elm

    for(var i=0;i<count;i++){
        var obj= jsonObj.jsonList[i];
        console.log(obj.title);
        document.addEventListener('DOMContentLoaded', function() {
        var div = document.createElement('div');
        div.innerHTML = obj.title;
        div.className = 'header-row';
     
        document.body.appendChild(div);
    }, false);
    }

}

/* This function populates the Home Menu */
function populateMenu2(containerName) {
    
    const retrievedJson = localStorage.getItem("tempJson");
    console.log(retrievedJson);
    const jsonObj = JSON.parse(retrievedJson);
    var count = Object.keys(jsonObj.jsonList).length;
    console.log(count);
    var container= document.getElementById(containerName); // reference to containing elm

    for(var i=0;i<count;i++){
    var obj= jsonObj.jsonList[i];
    console.log(obj.title);
    var button = "<input type='submit' value="+obj.title+"></input>";
    container.innerHTML+=button;
    }
}

/*This function formats "_" as " " and "/n" as "<br>" */
function cleanFormat(word) {
    console.log("hi");
}