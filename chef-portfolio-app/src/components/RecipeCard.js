//renders a title card with image for a recipe

import React from "react";

function RecipeCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.species}</h3>
    </div>
  );
}

export default RecipeCard;
