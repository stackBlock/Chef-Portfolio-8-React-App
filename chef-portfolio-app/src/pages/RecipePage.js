//renders a complete view of one recipe, with a photo, ingredients list, instructions.
// two different views depending on user type
// guest user: buttons to go back to Guest Homepage (recipes) or to Meet The Chefs
// chef user: buttons to Create New Post or view My Profile

import React from "react";
import Page from "../pages/Page";
import RPAuthButtons from "../components/RPAuthButtons";
import RPUnauthButtons from "../components/RPUnauthButtons";

function RecipePage(props) {
  const token = localStorage.getItem("token");

  return (
    <>
      <Page>
        <h2>{props.title}</h2>
        <div>
          <img>{props.authorImg}</img>
          <p>Chef {props.authorName}</p>
        </div>
        <img>{props.img}</img>
        <div>
          <h4>Let's Cook!</h4>
          <p>Approximately {props.time} hours</p>
        </div>
        <div>
          <div>
            <h2>Ingredients</h2>
            <p>{props.ingredients}</p>
          </div>
          <div>
            <h2>Instructions</h2>
            <p>{props.instructions}</p>
          </div>
        </div>
        <div>
          <h4>Recipe Media</h4>
          <div>
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
            <img />
          </div>
        </div>

        <div>{token ? <RPAuthButtons /> : <RPUnauthButtons />}</div>
      </Page>
    </>
  );
}

export default RecipePage;

// key={recipe.id}
// chefName={recipe.chef_name}
// title={recipe.recipe_name}
// photo={recipe.photo}
// ingredients={recipe.recipe_ingredients}
// cookTime={recipe.cook_time}
// prepTime={recipe.prep_time}
// instructions={recipe.instructions}
// servings={recipe.servings}
