//create a form for a chef to make a new post
// use axios.post request on form submit
// route back to chef profile page on submit

import React from "react";
import Page from "../pages/Page";
import { connect } from "react-redux";
import { postNewRecipe, postNewChefProfile } from "../actions/index";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function CreatePost(props) {
  //this is only for demonstration purposes- include axios post with this props.history.push

  // const [recipes, setRecipes] = useState([]);

  const userSchema = Yup.object().shape({
    title: Yup.string().required(),
    time: Yup.string().required(),
    ingredients: Yup.string().required(),
    instructions: Yup.string().required()
  });

  return (
    <>
      <Page>
        <h1>Create Post</h1>

        <Formik
          initialValues={{
            title: "",
            time: "",
            ingredients: "",
            instructions: ""
          }}
          onSubmit={(values, tools) => {
            tools.resetForm();
            props.postNewRecipe(values);
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
                  Title:
                  <Field
                    name="title"
                    type="text"
                    placeholder="Squash and Feta Flatbread"
                  />
                </label>
                {props.errors.title && props.touched.title ? (
                  <span className="red">{props.errors.title}</span>
                ) : (
                  ""
                )}

                <label>
                  Time to complete:
                  <Field
                    name="time"
                    type="text"
                    placeholder="Approximately 1 hour"
                  />
                </label>
                {props.errors.time && props.touched.time ? (
                  <span className="red">{props.errors.time}</span>
                ) : (
                  ""
                )}

                <label>
                  Ingredients:
                  <Field
                    name="ingredients"
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
