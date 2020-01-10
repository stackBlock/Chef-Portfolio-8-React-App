//renders a complete view of one recipe, with a photo, ingredients list, instructions.
// two different views depending on user type
// guest user: buttons to go back to Guest Homepage (recipes) or to Meet The Chefs
// chef user: buttons to Create New Post or view My Profile

import React, { useEffect, useState } from "react";
import Page from "../pages/Page";
import RPAuthButtons from "../components/RPAuthButtons";
import RPUnauthButtons from "../components/RPUnauthButtons";
import axios from "axios";

function RecipePage(props) {
  console.log(props);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://chef-2.herokuapp.com/api/recipes/recipeid/${props.match.params.id}`
      )
      .then(res => {
        console.log(res);
        setRecipe(res.data);
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  const token = localStorage.getItem("token");

  return (
    <>
      <Page>
        <h2>{recipe.recipe_name}</h2>
        <div>
          <p>Chef {recipe.chef_name}</p>
        </div>
        <img src={recipe.recipe_photo} alt=""></img>
        <div>
          <h4>Let's Cook!</h4>
          <p>Approximately {recipe.cook_time} </p>
          <p>Servings: {recipe.servings}</p>
        </div>
        <div>
          <div>
            <h2>Ingredients</h2>
            <p>{recipe.recipe_ingredients}</p>
          </div>
          <div>
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
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
