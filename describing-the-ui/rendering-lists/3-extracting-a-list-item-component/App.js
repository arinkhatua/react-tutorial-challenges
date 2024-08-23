import { recipes } from './data.js';

function Recipe({ name, ingredients }) {
  const ingredientListItems = ingredients.map(ingredient =>
    <li key={ingredient}>{ingredient}</li>
  );

  return (
    <>
      <h2>{name}</h2>
      <ul>{ingredientListItems}</ul>
    </>
  );
}

export default function RecipeList() {
  const recipeElems = recipes.map(({ id, name, ingredients }) =>
    <Recipe key={id} name={name} ingredients={ingredients}></Recipe>
  );

  return (
    <div>
      <h1>Recipes</h1>
      {recipeElems}
    </div>
  );
}
