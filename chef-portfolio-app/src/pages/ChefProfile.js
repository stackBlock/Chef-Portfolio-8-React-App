//thinking here... would we have an "edit profile" button that would toggle the edit fields on the chef profile page? I'm thinking back to our CodeSandbox Dragon List Reducer/Actions example.
// Or do we need a specific component just for editing?

import React from "react";
import Page from "../pages/Page";

function ChefProfile(props) {
  const routeToCreatePost = () => {
    props.history.push("/create-post");
  };

  const routeToGuestHomepage = () => {
    props.history.push("/homepage");
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

export default ChefProfile;
