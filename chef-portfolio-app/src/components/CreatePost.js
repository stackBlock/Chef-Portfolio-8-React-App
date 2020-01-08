//create a form for a chef to make a new post
// use axios.post request on form submit
// route back to chef profile page on submit

import React from "react";
import Page from "../pages/Page";
import { connect } from "react-redux";
import { postNewRecipe } from "../actions/index";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function CreatePost(props) {
  //this is only for demonstration purposes- include axios post with this props.history.push

  // const [recipes, setRecipes] = useState([]);

  const userSchema = Yup.object().shape({
    recipe_name: Yup.string().required(),
    recipe_ingredients: Yup.string().required(),
    instructions: Yup.string().required()
  });

  return (
    <>
      <Page>
        <h1>Create Post</h1>

        <Formik
          initialValues={{
            chef_name: "",
            recipe_name: "", //req
            recipe_photo: "",
            recipe_ingredients: "", //req
            cook_time: "",
            prep_time: "",
            instructions: "", //req
            servings: ""
          }}
          onSubmit={(values, tools) => {
            tools.resetForm();
            props.postNewRecipe(values);
            // props.history.push(`/recipe/${props.match.params.id}`);
            // axios
            //   .post("https://reqres.in/api/users", values)
            //   .then(res => {
            //     console.log("SUCCESSFUL", res);

            //     const recipeData = res.data;

            //     setRecipes([...recipes, recipeData]);
            //   })
            //   .catch(err => {
            //     console.log("FAILURE", err);
            //   });
          }}
          validationSchema={userSchema}
          render={props => {
            return (
              <Form className="formContainer">

                <label>
                  Your name:
                  <Field
                    name="chef_name"
                    type="text"
                    placeholder="David Elofson"
                  />
                </label>

                <label>
                  Recipe name:
                  <Field
                    name="recipe_name"
                    type="text"
                    placeholder="Squash and Feta Flatbread"
                  />
                </label>
                {props.errors.recipe_name && props.touched.recipe_name ? (
                  <span className="red">{props.errors.recipe_name}</span>
                ) : (
                  ""
                )}

                <label>
                  Ingredients:
                  <Field
                    name="recipe_ingredients"
                    as="textarea"
                    placeholder="List of ingredients needed"
                  />
                </label>
                {props.errors.ingredients && props.touched.ingredients ? (
                  <span className="red">{props.errors.ingredients}</span>
                ) : (
                  ""
                )}

                <label>
                  Cook time:
                  <Field
                    name="cook_time"
                    type="text"
                    placeholder="35 minutes"
                  />
                </label>

                <label>
                  Prep time:
                  <Field
                    name="prep_time"
                    type="text"
                    placeholder="20 minutes"
                  />
                </label>

                <label>
                  Instructions:
                  <Field
                    name="instructions"
                    as="textarea"
                    placeholder="List of instructions"
                  />
                </label>
                {props.errors.instructions && props.touched.instructions ? (
                  <span className="red">{props.errors.instructions}</span>
                ) : (
                  ""
                )}

                <label>
                  Servings:
                  <Field
                    name="servings"
                    type="text"
                    placeholder="2"
                  />
                </label>

                <label>
                  Add a photo:
                  <Field
                    name="recipe_photo"
                    type="file"
                  />
                </label>

                <input className="submitButton" type="submit" />
              </Form>
            );
          }}
        />
      </Page>
    </>
  );
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(mapStateToProps, { postNewRecipe })(CreatePost);
