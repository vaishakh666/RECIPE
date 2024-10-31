import React, { useState } from 'react';
import RecipeItem from './RecipeItem'; // Ensure RecipeItem is used if necessary

const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State for the selected recipe
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe); // Set the selected recipe
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedRecipe(null); // Clear the selected recipe
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div
          className="one"
          key={recipe.id}
          onClick={() => handleRecipeClick(recipe)}
          style={{ cursor: 'pointer' }}
        >
          <h3>{recipe.name}</h3> {/* Show recipe name */}
          <p>{recipe.cuisine}</p> {/* Show cuisine */}
        </div>
      ))}

      {isModalOpen && selectedRecipe && ( // Render the modal if it's open and a recipe is selected
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="close-button">X</button>
            <h2>{selectedRecipe.name}</h2>
            <p><strong>Cuisine:</strong> {selectedRecipe.cuisine}</p>
            <p><strong>Ingredients:</strong> {selectedRecipe.ingredients.join(', ')}</p> {/* Assuming ingredients is an array */}
            <p><strong>Instructions:</strong> {selectedRecipe.instructions}</p> {/* Assuming instructions is a string */}
            {/* Add any other details you want to show */}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
