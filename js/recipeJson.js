const recipeJSON = `
        {"myObject":
            [
                "Apple Rosemary Bread": {
                    "ingredients": "example example",
                    "link": "example2",
                    "materials": "example3",
                    "name": "example4",
                    "servings": "example5",
                    "steps": "example6",
                    "time": "example7"
                },
                "Apple Sauce (Dad’s Variant)": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Banana Bread": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Bagels": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Cinnamon Rolls": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Coffee Cake": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Coffee Cake": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Cookies (Meg’s Variant)": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Cookies (Vegan Variant)": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Crepes": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Crepes (Alison’s Variant)": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Croissant": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Garlic Bread": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Lava Cake": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Lava Cake (Paloma’s Variant)": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Macaron": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Monkey Bread": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Pizza": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Ribs": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Rolls": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                },
                "Wings": {
                        "ingredients": "",
                        "link": "",
                        "materials": "",
                        "name": "",
                        "servings": "",
                        "steps": "",
                        "time": ""
                }
            ]
        }
        `;
localStorage.setItem("recipeJson",recipeJSON);

var recipeJSON2 = 
        {"jsonList":
            [
                {
                    "title":"Apple Rosemary Bread",
                    "ingredients": "",
                    "link": "",
                    "materials": "",
                    "name": "",
                    "servings": "",
                    "steps": "",
                    "time": ""
                },
                {       
                    "title":"Apple Sauce (Dad's Variant)",
                    "ingredients": "",
                    "link": "",
                    "materials": "",
                    "name": "",
                    "servings": "",
                    "steps": "",
                    "time": ""
                }
            ]
        }
        ;
const recipeJSON3 = JSON.stringify(recipeJSON2);
localStorage.setItem("tempJson",recipeJSON3)