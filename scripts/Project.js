// Fetching external data
const fetchData = async () => {
    try {
        const response = await fetch('https://yolylopezlizano.github.io/cse121b/Receipes_menu.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};

// Filtering recipes based on available ingredients
const filterRecipes = (recipes, availableIngredients) => {
    return recipes.filter(recipe =>
        recipe.ingredients.some(ingredient =>
            availableIngredients.includes(ingredient)
        )
    );
};

// Displaying recipes
const displayRecipes = (recipes) => {
    const suggestedRecipesDiv = document.getElementById('suggestedRecipes');
    suggestedRecipesDiv.innerHTML = '';

    if (recipes.length === 0) {
        suggestedRecipesDiv.innerHTML = 'No recipes found with the given ingredients.';
    } else {
        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            const ingredients = recipe.ingredients.join(', ');

            const recipeHTML = `
                <h2>${recipe.name}</h2>
                <h3>Ingredients:</h3>
                <p>${ingredients}</p>
                <h3>Cooking Instructions:</h3>
                <p>${recipe.instructions}</p>
            `;

            recipeDiv.innerHTML = recipeHTML;
            suggestedRecipesDiv.appendChild(recipeDiv);
        });
    }
};

// Main function
const main = async () => {
    const data = await fetchData();
    const form = document.getElementById('ingredientForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = document.getElementById('ingredients').value.toLowerCase();
        const availableIngredients = input.split(',').map(ingredient => ingredient.trim());

        const filteredRecipes = filterRecipes(data.recipes, availableIngredients);
        displayRecipes(filteredRecipes);
    });
};

main();
