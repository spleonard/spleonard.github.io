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

/* This function saves all Subset Categories of the Json File */
function updateVariables() {
    // Call and log the full Json file (formed in recipeJson.js)
    const fullRecipeJson = localStorage.getItem("recipeJson");
    const parsedRecipeJson = JSON.parse(fullRecipeJson).jsonList;

    // Retrieve the Recipe Name
    const recipeChosen = localStorage.getItem("recipeSelected");

    // Search the Json File for Recipe and Return Index
    let index = parsedRecipeJson.findIndex( element => {
        if (element.title === recipeChosen) {
        return true;
        }
    });

    // Get Mini-Json File
    console.log("The index is "+index);
    let RJson = parsedRecipeJson[index];
    
    // Save all relevant data as new local variables
    localStorage.setItem("recipeIngredients",RJson.ingredients);
    localStorage.setItem("recipeLink",RJson.link);
    localStorage.setItem("recipeMaterials",RJson.materials);
    localStorage.setItem("recipeTitle",RJson.title);
    localStorage.setItem("recipeServings",RJson.servings);
    localStorage.setItem("recipeSteps",RJson.steps);
    localStorage.setItem("recipeTime",RJson.time);
}

/* This Function Populates the Home Menu */
function populateMenu(containerName){
    // Call the full Json file (formed in recipeJson.js)
    const retrievedJson = localStorage.getItem("recipeJson"); 
    const jsonObj = JSON.parse(retrievedJson);

    // Find Number of Entries in the Json file
    console.log(jsonObj);
    var count = Object.keys(jsonObj.jsonList).length; // This Part of the File is Glitchy, but Only on Desktop for Some Reason

    // Set the div Defined to be the Container
    var container= document.getElementById(containerName);

    // Create a div for each Entry
    for(var i=0;i<count;i++){
        // Find the Relevant Part of the Json File
        var obj= jsonObj.jsonList[i];

        // Create, Populate, and Format a new div
        var menuitem = document.createElement('div');
        menuitem.innerHTML = "<h1 class='text-white'>"+obj.title+"</h1>";
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

function populateRecipe() {
    // Retrieve all Json Variables
    const varIngredients = localStorage.getItem("recipeIngredients");
    const varLink = localStorage.getItem("recipeLink");
    const varMaterials = localStorage.getItem("recipeMaterials");
    const varTitle = localStorage.getItem("recipeTitle");
    const varServings = localStorage.getItem("recipeServings");
    const varSteps = localStorage.getItem("recipeSteps");
    const varTime = localStorage.getItem("recipeTime");
    ingredients.innerHTML = varIngredients;
    materials.innerHTML = varMaterials;
    title.innerHTML = varTitle;
    servings.innerHTML = varServings;
    steps.innerHTML = varSteps;
    time.innerHTML = varTime;
}