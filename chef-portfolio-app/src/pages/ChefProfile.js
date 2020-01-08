import React, { useEffect } from "react";
import Page from "./Page";
import { connect } from "react-redux";
import { getChefRecipes, getAChef } from "../actions/index";
import RecipeCard from "../components/RecipeCard";
import CPAuthButtons from "../components/CPAuthButtons";
import CPUnauthButtons from "../components/CPUnauthButtons";

function ChefProfile(props) {
  const token = localStorage.getItem("token");
  const Id = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    props.getAChef(Id);
  }, []);

  return (
    <>
      <Page>
        <div>
          {/* <img>{props.chefs.profileImg}</img> */}
          <h2>{props.chefs.full_name}</h2>
          <p>Master Chef</p>
          <p>{props.chefs.location}</p>
        </div>
        <div>
          <h3>About:</h3>
          <p>{props.chefs.Bio}</p>
        </div>
        <div>
          {/* {props.chefs.recipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              img={recipe.img}
              name={recipe.name}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
            />
          ))} */}
        </div>
        <div>{token ? <CPAuthButtons /> : <CPUnauthButtons />}</div>
      </Page>
    </>
  );
}

const mapStateToProps = state => {
  return {
    chefs: state.chefProfiles.chefs
  };
};

export default connect(mapStateToProps, { getChefRecipes, getAChef })(
  ChefProfile
);
