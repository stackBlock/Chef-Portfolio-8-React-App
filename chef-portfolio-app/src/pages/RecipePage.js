//renders a complete view of one recipe, with a photo, ingredients list, instructions.
// two different views depending on user type
// guest user: buttons to go back to Guest Homepage (recipes) or to Meet The Chefs
// chef user: buttons to Create New Post or view My Profile

import React, { useEffect } from "react";
import Page from "../pages/Page";
import { connect } from "react-redux";
import { getARecipe, deleteRecipe } from "../actions/index";
import RPAuthButtons from "../components/RPAuthButtons";
import RPUnauthButtons from "../components/RPUnauthButtons";

function RecipePage(props) {
  console.log(props);

  useEffect(() => {
    props.getARecipe(props.match.params.id);
  }, []);

  const token = localStorage.getItem("token");

  return (
    <>
      <Page>
        <h2>{props.recipes.recipe_name}</h2>
        <div>
          <p>Chef {props.recipes.chef_name}</p>
        </div>
        <img src={props.recipes.recipe_photo}></img>
        <div>
          <h4>Let's Cook!</h4>
          <p>Approximately {props.recipes.cook_time} hours</p>
        </div>
        <div>
          <div>
            <h2>Ingredients</h2>
            <p>{props.recipes.recipe_ingredients}</p>
          </div>
          <div>
            <h2>Instructions</h2>
            <p>{props.recipes.instructions}</p>
          </div>
        </div>
        <div>
          <h4>Recipe Media</h4>
          <div>
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
            <img alt="" />
          </div>
        </div>

        <div>
          {token ? (
            <RPAuthButtons deleteRecipe={props.deleteRecipe} />
          ) : (
            <RPUnauthButtons />
          )}
        </div>
      </Page>
    </>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipes,
    error: state.error
  };
};

export default connect(mapStateToProps, { getARecipe, deleteRecipe })(
  RecipePage
);

// key={recipe.id}
// chefName={recipe.chef_name}
// title={recipe.recipe_name}
// photo={recipe.photo}
// ingredients={recipe.recipe_ingredients}
// cookTime={recipe.cook_time}
// prepTime={recipe.prep_time}
// instructions={recipe.instructions}
// servings={recipe.servings}
