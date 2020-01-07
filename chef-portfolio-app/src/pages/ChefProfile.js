import React from "react";
import Page from "./Page";
import { connect } from "react-redux";
import { updateChefProfile } from "../actions/index";
import RecipeCard from "../components/RecipeCard";
import CPAuthButtons from "../components/CPAuthButtons";
import CPUnauthButtons from "../components/CPUnauthButtons";

function ChefProfile(props) {
  const token = localStorage.getItem("token");
  // const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Page>
        <div>
          <img>{props.chefs.profileImg}</img>
          <h2>{props.chefs.name}</h2>
          <p>{props.chefs.title}</p>
          <p>{props.chefs.location}</p>
        </div>
        <div>
          <h3>About:</h3>
          <p>{props.chefs.about}</p>
        </div>
        <div>
          {props.chefs.recipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              img={recipe.img}
              name={recipe.name}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
            />
          ))}
        </div>
        <div>{token ? <CPAuthButtons /> : <CPUnauthButtons />}</div>
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

export default connect(mapStateToProps, { updateChefProfile })(ChefProfile);
