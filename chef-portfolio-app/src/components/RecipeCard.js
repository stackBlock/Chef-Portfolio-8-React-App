//renders a title card with image for a recipe

// will need an onClick that directs users to the Recipe Page for that specific recipe

import React from "react";

function RecipeCard(props) {
  // const routeToRecipePage = () => {
  //   props.history.push(`/recipe/${props.match.params.id}`);
  // };

  return (
    <div>
      <img src={props.photo} />
      <h2>{props.title}</h2>
      <p>Chef: {props.chefName}</p>
    </div>
  );
}

export default RecipeCard;

//onClick={routeToRecipePage}
