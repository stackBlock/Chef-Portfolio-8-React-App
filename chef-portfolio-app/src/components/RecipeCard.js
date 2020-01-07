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
      {/* <h3>{props.ingredients}</h3>
      <h3>{props.instructions}</h3> */}
    </div>
  );
}

export default RecipeCard;

// key={recipe.id}
// chefName={recipe.chef_name}
// title={recipe.recipe_name}
// photo={recipe.photo}
// ingredients={recipe.recipe_ingredients}
// cookTime={recipe.cook_time}
// prepTime={recipe.prep_time}
// instructions={recipe.instructions}
// servings={recipe.servings}

//onClick={routeToRecipePage}
