import { recipes } from './data.js';

function Recipe({ recipe }) {
  const ingredientListItems = recipe.ingredients.map(ingredient =>
    <li key={ingredient}>{ingredient}</li>
  );

  return (
    <>
      <h2>{recipe.name}</h2>
      <ul>{ingredientListItems}</ul>
    </>
  );
}

export default function RecipeList() {
  const recipeList = recipes.map(recipe =>
    <Recipe recipe={recipe} key={recipe.id}></Recipe>
  );

  return (
    <div>
      <h1>Recipes</h1>
      {recipeList}
    </div>
  );
}
