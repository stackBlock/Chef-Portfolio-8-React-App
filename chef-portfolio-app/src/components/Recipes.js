//map over array of recipes and render a RecipeCard component for each here.
// thinking here, we should make this reusable so that the Recipes can be displayed on a chef's profile (just his/her recipes) and on the Guest Homepage (all recipes in database)

import React from "react";
import { connect } from "react-redux";
import { getRecipes } from "../actions/recipeAction";
import RecipeCard from "./RecipeCard";

function Recipes(props) {
  console.log(props.recipes);
  return (
    <>
      <button onClick={props.getRecipes}>Show Me Rick</button>
      {props.recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          title={recipe.name}
          species={recipe.species}
        />
      ))}
    </>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipes,
    error: state.error
  };
};

export default connect(mapStateToProps, { getRecipes })(Recipes);
