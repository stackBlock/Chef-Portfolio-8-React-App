//map over array of recipes and render a RecipeCard component for each here.
// thinking here, we should make this reusable so that the Recipes can be displayed on a chef's profile (just his/her recipes) and on the Guest Homepage (all recipes in database)

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../actions/recipeAction";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import Loader from 'react-loader-spinner';

function Recipes(props) {
  console.log(props.recipes);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://chef-2.herokuapp.com/api/recipes").then(res => {
      console.log(res);
      setRecipes(res.data);
    });
  }, []);

  //Search state and input field state

  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState(recipes);

  //loading state

  const [loading, setLoading] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    setLoading(true);

    setTimeout(() => {
      setSearchResults(
        recipes.filter(recipe => {
          // return recipe.recipe_name.toLowerCase().includes(inputText.toLowerCase())
          if(
            recipe.recipe_name.toLowerCase().includes(inputText.toLowerCase())
            || recipe.chef_name.toLowerCase().includes(inputText.toLowerCase())
          ){
            return recipe;
          }
        })
      )
      setLoading(false);
    }, 300)
=======
    setSearchResults(
      recipes.filter(recipe => {
        return recipe.recipe_name
          .toLowerCase()
          .includes(inputText.toLowerCase());
      })
    );
>>>>>>> 7bfd17f1ab211c3216afcce4274bad8c5c75de4f
  }, [inputText, recipes]);

  const handleChange = e => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <>
      <div className="searchBar">
        <div className="searchFormDesc">
          <p>
            EXPLORE MORE! Search by Chef, Ingredient, Recipe, Type and More!
          </p>
        </div>

        <form class="searchForm">
          <label>
            <input
              type="text"
              value={inputText}
              onChange={handleChange}
              name="search"
              placeholder="Search"
            />
          </label>
        </form>
      </div>

<<<<<<< HEAD
      {
        loading || !searchResults.length
        ?
          <div>
            <Loader
              type="TailSpin"
              color="#07FE20"
              height={50}
              width={50}
            />
            <p>Nothing to display...</p>
          </div>
        :
          searchResults.map(recipe => {
            return(
              <RecipeCard
                key={recipe.id}
                chefName={recipe.chef_name}
                title={recipe.recipe_name}
                photo={recipe.recipe_photo}
              />
            )
          })
      }
=======
      {searchResults.map(recipe => {
        return (
          <RecipeCard
            key={recipe.id}
            chefName={recipe.chef_name}
            title={recipe.recipe_name}
            photo={recipe.recipe_photo}
          />
        );
      })}
>>>>>>> 7bfd17f1ab211c3216afcce4274bad8c5c75de4f

      {/* <button onClick={props.getRecipes}>Show Me Rick</button> */}
      {/* {recipes.map(recipe => (
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
      ))} */}
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
