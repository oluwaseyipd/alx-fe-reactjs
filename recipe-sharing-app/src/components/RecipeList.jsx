// RecipeList.jsx
import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const { filteredRecipes, recipes, searchTerm, filterRecipes } =
    useRecipeStore();

  useEffect(() => {
    filterRecipes();
  }, [recipes, searchTerm, filterRecipes]);

  const recipesToShow =
    searchTerm.trim().length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {recipesToShow.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipesToShow.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
