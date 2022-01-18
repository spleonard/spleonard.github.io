
function ButtonX_Click(pageRequest) {
    console.log(pageRequest + " was the selection");
    localStorage.setItem("recipeSelected",pageRequest);

    const fullRecipeJson = localStorage.getItem("recipeJson")
    const recipeTitle = JSON.parse(fullRecipeJson);
    console.log(recipeTitle);

    let data = recipeTitle[pageRequest].name;
    console.log(data);
}
