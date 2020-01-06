//renders a complete view of one recipe, with a photo, ingredients list, instructions.
// two different views depending on user type
// guest user: buttons to go back to Guest Homepage (recipes) or to Meet The Chefs
// chef user: buttons to Create New Post or view My Profile

import React from "react";
import Page from "../pages/Page";

function RecipePage(props) {
  const routeToCreatePost = () => {
    props.history.push("/create-post");
  };

  const routeToGuestHomepage = () => {
    props.history.push("/homepage");
  };

  const routeToMeetChefs = () => {
    props.history.push("/meet-the-chefs");
  };

  const routeToChefProfile = () => {
    props.history.push("/chef-profile/:id");
  };

  return (
    <>
      <Page>
        <h1>
          I'm the Recipe Page. I'll have a picture, a list of ingredients and
          instructions. I'll have two different views depending on user type.
        </h1>
        <button onClick={routeToCreatePost}>Create Post-AU</button>
        <button onClick={routeToChefProfile}>View My Profile</button>
        <h2>OR</h2>
        <button onClick={routeToGuestHomepage}>Return to Recipes-GU</button>
        <button onClick={routeToMeetChefs}>Return to Chefs-GU</button>
      </Page>
    </>
  );
}

export default RecipePage;
