//render the Recipes component here.

import React from "react";
import Page from "../pages/Page";
import Recipes from "../components/Recipes";

function GuestHomepage(props) {
  const routeToRecipePage = () => {
    props.history.push("/recipe/:id");
  };

  return (
    <Page>
      <Recipes />
      <button onClick={routeToRecipePage}>
        Here's a pretend recipe card- click me to view the recipe component
      </button>
    </Page>
  );
}

export default GuestHomepage;
