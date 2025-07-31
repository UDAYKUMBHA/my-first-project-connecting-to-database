const form = document.getElementById('recipe-form');
const nameInput = document.getElementById('recipe-name');
const descInput = document.getElementById('recipe-description');
const recipeList = document.getElementById('recipe-list');

// Placeholder for recipe data
const recipes = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const description = descInput.value;

  const recipe = { name, description };
  recipes.push(recipe);

  renderRecipes();
  form.reset();
});

function renderRecipes() {
  recipeList.innerHTML = '';
  recipes.forEach((recipe) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${recipe.name}</strong>: ${recipe.description}`;
    recipeList.appendChild(li);
  });
}
