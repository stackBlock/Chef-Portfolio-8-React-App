//renders a title card with image for a recipe

// will need an onClick that directs users to the Recipe Page for that specific recipe

import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  // const routeToRecipePage = () => {
  //   props.history.push(`/recipe/${props.match.params.id}`);
  // };

  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div>
        <img src={recipe.photo} />
        <h2>{recipe.title}</h2>
        <p>Chef: {recipe.chefName}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;

//onClick={routeToRecipePage}
