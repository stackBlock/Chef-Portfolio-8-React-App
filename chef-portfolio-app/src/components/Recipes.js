//map over array of recipes and render a RecipeCard component for each here.
// thinking here, we should make this reusable so that the Recipes can be displayed on a chef's profile (just his/her recipes) and on the Guest Homepage (all recipes in database)

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../actions/recipeAction";
import RecipeCard from "./RecipeCard";
import axios from "axios";

function Recipes(props) {
  console.log(props.recipes);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://chef-2.herokuapp.com/api/recipes/").then(res => {
      console.log(res);
      setRecipes(res.data);
    });
  }, []);

  return (
    <>
      {/* <button onClick={props.getRecipes}>Show Me Rick</button> */}
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          chefName={recipe.chef_name}
          title={recipe.recipe_name}
          photo={recipe.recipe_photo}
          // ingredients={recipe.recipe_ingredients}
          // cookTime={recipe.cook_time}
          // prepTime={recipe.prep_time}
          // instructions={recipe.instructions}
          // servings={recipe.servings}
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
