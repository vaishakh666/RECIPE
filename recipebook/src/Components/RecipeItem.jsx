import React from 'react';

const RecipeItem = ({ recipe }) => (
  <div>
    <h2>{recipe.name}</h2>
    <p>Cuisine: {recipe.cuisine}</p>
    <h3>Ingredients:</h3>
    <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
    <h3>Instructions:</h3>
    <p>{recipe.instructions}</p>
  </div>
);

export default RecipeItem;
