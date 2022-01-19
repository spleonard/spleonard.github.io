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
