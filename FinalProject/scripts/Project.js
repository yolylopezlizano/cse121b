document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('ingredients');
    const recipesList = document.getElementById('recipes');

    fetch('https://yolylopezlizano.github.io/cse121b/Receipes_menu.json')
        .then(response => response.json())
        .then(data => {
            const ingredients = getIngredients(data);

            showIngredients(ingredients);
        })
        .catch(error => console.error('Error fetching data:', error));

    function getIngredients(data) {
        const ingredients = new Set();
        data.recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                ingredients.add(ingredient);
            });
        });
        return Array.from(ingredients);
    }

    function showIngredients(ingredients) {
        ingredients.forEach(ingredient => {
            const option = document.createElement('option');
            option.text = ingredient;
            select.add(option);
        });
    }
});

function showRecipes() {
    const select = document.getElementById('ingredients');
    const selection = select.value;
    const recipesList = document.getElementById('recipes');

    fetch('https://yolylopezlizano.github.io/cse121b/Receipes_menu.json')
        .then(response => response.json())
        .then(data => {
            recipesList.innerHTML = '';
            data.recipes.forEach(recipe => {
                if (recipe.ingredients.includes(selection)) {
                    const item = document.createElement('li');
                    item.textContent = `${recipe.name}: ${recipe.ingredients.join(', ')}: ${recipe.instructions}`;
                    recipesList.appendChild(item);
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
