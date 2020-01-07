import React from "react";
import Page from "../pages/Page";
import { connect } from "react-redux";
import { updateChefProfile } from "../actions/index";

function AuthChefProfile(props) {
  const routeToCreatePost = () => {
    props.history.push("/create-post");
  };

  const routeToGuestHomepage = () => {
    props.history.push("/");
  };

  const routeToMeetChefs = () => {
    props.history.push("/meet-the-chefs");
  };

  return (
    <>
      <Page>
        <h1>
          I'm a chef's personal profile. I'll have two different views, one for
          an authorized user and one for guests.
        </h1>
        <button onClick={routeToCreatePost}>Create Post-AU</button>
        <h2>OR</h2>
        <button onClick={routeToGuestHomepage}>Return to Recipes-GU</button>
        <button onClick={routeToMeetChefs}>Return to Chefs-GU</button>
      </Page>
    </>
  );
}

const mapStateToProps = state => {
  return {
    chefs: state.chefs,
    updatingChef: state.updateChef
  };
};

export default connect(mapStateToProps, { updateChefProfile })(AuthChefProfile);
