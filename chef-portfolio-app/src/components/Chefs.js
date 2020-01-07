//map over the array of chefs and render a ChefCard for each chef here
import React from "react";
import { connect } from "react-redux";
import ChefCard from "../components/ChefCard";

const Chefs = props => {
  return (
    <div>
      <h1>I'll have a list of all the chefs one day</h1>
      {/* {props.chefs.map(chef => (
        <ChefCard
          key={chef.id}
          img={chef.img}
          name={chef.name}
          location={chef.location}
          mission={chef.mission}
        />
      ))} */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    chefs: state.chefs,
    error: state.error
  };
};
// console.log(chefs);
export default connect(mapStateToProps, {})(Chefs);
