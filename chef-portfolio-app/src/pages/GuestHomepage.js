//render the Recipes component here.

import React from "react";
import Page from "../pages/Page";
import Recipes from "../components/Recipes";

function GuestHomepage(props) {
  console.log(props);
  return (
    <Page>
      <Recipes />
    </Page>
  );
}

export default GuestHomepage;
