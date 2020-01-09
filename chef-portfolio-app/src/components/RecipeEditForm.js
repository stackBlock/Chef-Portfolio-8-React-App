import React, { useState } from "react";
import Page from "../pages/Page";
import { connect } from "react-redux";
import { updateRecipe } from "../actions/index";

const RecipeEditForm = props => {
  const [editRecipe, setEditRecipe] = useState({
    recipe_name: "",
    chef_name: "",
    recipe_photo: "",
    cook_time: "",
    recipe_ingredients: "",
    instructions: "",
    servings: "",
    prep_time: ""
  });

  const handleChange = e => {
    setEditRecipe({
      ...editRecipe,
      [e.target.name]: e.target.value
    });
    console.log(editRecipe);
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    props.updateRecipe(editRecipe, 4);
    console.log(editRecipe);
    // props.history.push(`/recipe/${id}`);
  };

  return (
    <Page>
      <form onSubmit={handleSubmit} className="formContainer">
        <label>
          Recipe name:
          <input
            name="recipe_name"
            type="text"
            placeholder="Squash and Feta Flatbread"
            value={editRecipe.recipe_name}
            onChange={handleChange}
          />
        </label>

        <label>
          Ingredients:
          <input
            name="recipe_ingredients"
            as="textarea"
            placeholder="List of ingredients needed"
            value={editRecipe.recipe_ingredients}
            onChange={handleChange}
          />
        </label>

        <label>
          Cook time:
          <input
            name="cook_time"
            type="text"
            placeholder="35 minutes"
            value={editRecipe.cook_time}
            onChange={handleChange}
          />
        </label>

        <label>
          Prep time:
          <input
            name="prep_time"
            type="text"
            placeholder="20 minutes"
            value={editRecipe.prep_time}
            onChange={handleChange}
          />
        </label>

        <label>
          Instructions:
          <input
            name="instructions"
            as="textarea"
            placeholder="List of instructions"
            value={editRecipe.instructions}
            onChange={handleChange}
          />
        </label>

        <label>
          Servings:
          <input
            name="servings"
            type="text"
            placeholder="2"
            value={editRecipe.servings}
            onChange={handleChange}
          />
        </label>

        <label>
          Add a photo:
          <input
            name="recipe_photo"
            type="text"
            value={editRecipe.recipe_photo}
            onChange={handleChange}
          />
        </label>
        <button className="submitButton">Save</button>
      </form>
    </Page>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(mapStateToProps, { updateRecipe })(RecipeEditForm);
