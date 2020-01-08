//renders a title card with image for a recipe

// will need an onClick that directs users to the Recipe Page for that specific recipe

import React from "react";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  console.log(props);
  // const routeToRecipePage = () => {
  //   props.history.push(`/recipe/${props.match.params.id}`);
  // };

  return (
    <Link to={`/recipe/${props.id}`}>
      <div>
        <img src={props.photo} />
        <h2>{props.title}</h2>
        <p>Chef: {props.chefName}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;

//onClick={routeToRecipePage}
