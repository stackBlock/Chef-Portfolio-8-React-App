//renders a title card with image for a recipe

// will need an onClick that directs users to the Recipe Page for that specific recipe

import React from "react";

function RecipeCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.species}</h3>
      {/* <h3>{props.ingredients}</h3>
      <h3>{props.instructions}</h3> */}
    </div>
  );
}

export default RecipeCard;
