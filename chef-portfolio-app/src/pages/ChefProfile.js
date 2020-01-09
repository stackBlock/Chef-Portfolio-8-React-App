import React, { useEffect, useState } from "react";
import Page from "./Page";
import { useParams } from "react-router";
// import RecipeCard from "../components/RecipeCard";
import CPAuthButtons from "../components/CPAuthButtons";
import CPUnauthButtons from "../components/CPUnauthButtons";
import axios from "axios";

function ChefProfile(props) {
  const token = localStorage.getItem("token");
  // const Id = JSON.parse(localStorage.getItem("user"));

  const { id } = useParams();

  const [chef, setChef] = useState([
    {
      full_name: "",
      location: "",
      Bio: ""
    }
  ]);

  useEffect(() => {
    axios
      .get(`https://chef-2.herokuapp.com/api/user/user/${chef.id}`)
      .then(res => {
        console.log(res.data);
        setChef(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  console.log(chef); //the chef is set to the 1st item in the array, why isn't it displaying??

  return (
    <>
      <Page>
        <div>
          {/* <img>{props.chefs.profileImg}</img> */}
          <h2>{chef.full_name}</h2>
          <p>Master Chef</p>
          <p>{chef.location}</p>
        </div>
        <div>
          <h3>About:</h3>
          <p>{chef.Bio}</p>
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

export default ChefProfile;
