/* This function saves the name of the clicked button */
function ButtonX_Click(pageRequest) {
    // Saves and logs the selected value as a local variable
    localStorage.setItem("recipeSelected",pageRequest);
    console.log(pageRequest + " was the selection");

    // Updates other local variables
    updateVariables();

    // Go to the Recipe Page
    window.location.href = './Recipes_Example.html'
}

/* This function saves all subset categories of the Json file as local variables */
function updateVariables() {
    // Call and log the full Json file (formed in recipeJson.js)
    const fullRecipeJson = localStorage.getItem("recipeJson");
    const parsedRecipeJson = JSON.parse(fullRecipeJson).jsonList;
    console.log(parsedRecipeJson);

    // Retrieve the Recipe Name and List
    const recipeChosen = localStorage.getItem("recipeSelected");
    var recipeIndex = localStorage.getItem("recipeList");

    console.log(recipeChosen);
    //console.log(recipeIndex.findIndex(recipeChosen));
    /*
    let RJson = parsedRecipeJson[recipeChosen];

    // Save all relevant data as new local variables
    localStorage.setItem("recipeIngredients",RJson.ingredients);
    console.log(RJson.ingredients);
    localStorage.setItem("recipeLink",RJson.link);
    localStorage.setItem("recipeMaterials",RJson.materials);
    localStorage.setItem("recipeName",RJson.name);
    localStorage.setItem("recipeServings",RJson.servings);
    localStorage.setItem("recipeSteps",RJson.steps);
    localStorage.setItem("recipeTime",RJson.time);
    */
}

/* This Function Populates the Home Menu */
function populateMenu(containerName){
    // Call the full Json file (formed in recipeJson.js)
    const retrievedJson = localStorage.getItem("recipeJson"); 
    const jsonObj = JSON.parse(retrievedJson);

    // Find Number of Entries in the Json file
    var count = Object.keys(jsonObj.jsonList).length;

    // Set the div Defined to be the Container
    var container= document.getElementById(containerName);

    // Create a div for each Entry
    for(var i=0;i<count;i++){
        // Find the Relevant Part of the Json File
        var obj= jsonObj.jsonList[i];

        // Create, Populate, and Format a new div
        var menuitem = document.createElement('div');
        menuitem.innerHTML = obj.title;
        menuitem.className = 'header-row opacity-hover';
        menuitem.onclick = function() {ButtonX_Click(this.textContent);};

        // Create a Spacer 
        var spacer = document.createElement('div');
        spacer.innerHTML = "<br>";

        // Append the div to the Predefined Container
        container.appendChild(menuitem);
        container.appendChild(spacer);
    };
}

/* This Function Creates a List of the Recipe Names (Utilized in updateVariables() Function) */
function createList(){
    // Call the full Json file (formed in recipeJson.js)
    const retrievedJson = localStorage.getItem("recipeJson"); 
    const jsonObj = JSON.parse(retrievedJson);

    // Find Number of Entries in the Json file
    var count = Object.keys(jsonObj.jsonList).length;

    // Create the Empty List
    var recipeList= [];

    // Record the Name for each Entry
    for(var i=0;i<count;i++){
        // Find the Relevant Part of the Json File and Push it to the List
        var obj= jsonObj.jsonList[i].title;
        recipeList.push(obj);
    };
    localStorage.setItem("recipeList",recipeList);
}

/*This function formats "_" as " " and "/n" as "<br>" */
function cleanFormat(word) {
    console.log("hi");
}