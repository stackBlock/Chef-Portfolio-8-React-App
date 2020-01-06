//create a form for a chef to make a new post
// use axios.post request on form submit
// route back to chef profile page on submit

import React from "react";
import Page from "../pages/Page";
import { connect } from "react-redux";
import { postNewRecipe } from "../actions/index";

function CreatePost(props) {
  //this is only for demonstration purposes- include axios post with this props.history.push
  const routeToChefProfile = () => {
    props.history.push("/chef-profile/:id");
  };

  return (
    <>
      <Page>
        <h1>I'll be a new post form when I'm all grown</h1>
        <button onClick={routeToChefProfile}>Save</button>
      </Page>
    </>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    error: state.error
  };
};

export default connect(mapStateToProps, { postNewRecipe })(CreatePost);
