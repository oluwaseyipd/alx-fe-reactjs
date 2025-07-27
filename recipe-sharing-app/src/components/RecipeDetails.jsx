import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(recipeId))
  );

  if (!recipe) return <p>Recipe not found</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button
        onClick={() =>
          isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
        }
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default RecipeDetails;
