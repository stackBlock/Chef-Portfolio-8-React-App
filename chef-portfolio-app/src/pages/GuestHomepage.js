//render the Recipes component here.

import React from "react";
import Page from "../pages/Page";

function GuestHomepage(props) {
  const routeToRecipePage = () => {
    props.history.push("/recipe/:id");
  };

  return (
    <Page>
      <h1>I am the guest homepage; you see a list of recipe cards on me</h1>
      <button onClick={routeToRecipePage}>
        Here's a pretend recipe card- click me to view the recipe component
      </button>
    </Page>
  );
}

export default GuestHomepage;
