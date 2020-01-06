//map over array of recipes and render a RecipeCard component for each here.
// thinking here, we should make this reusable so that the Recipes can be displayed on a chef's profile (just his/her recipes) and on the Guest Homepage (all recipes in database)

import React from "react";
import { connect } from "react-redux";
import { getRecipes } from "../actions/recipeAction";
import RecipeCard from "./RecipeCard";

function Recipes(props) {
  return (
    <>
      <h1>I'll be an array of recipes mapped over</h1>
      {props.recipes.map(recipe => (
        <RecipeCard key={id} name={recipe.name} species={recipe.species} />
      ))}
    </>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    error: state.error
  };
};

export default connect(mapStateToProps, { getRecipes })(Recipes);
