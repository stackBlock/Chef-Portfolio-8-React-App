//render the Chefs component here
//include button back to Guest Homepage (recipes)

import React from "react";
import Page from "../pages/Page";

function MeetChefs(props) {
  const routeToGuestHomepage = () => {
    props.history.push("/");
  };

  return (
    <>
      <Page>
        <h1>I'll be a page of Chef profile cards when I'm all grown</h1>
        <button onClick={routeToGuestHomepage}>Back to Recipes</button>
      </Page>
    </>
  );
}

export default MeetChefs;
