//map over the array of chefs and render a ChefCard for each chef here
import React from "react";
import { connect } from "react-redux";

const Chefs = props => {
  return <div></div>;
};

const mapStateToProps = state => {
  return {
    chefs: state.chefs,
    error: state.error
  };
};
console.log(chefs);
export default connect(mapStateToProps, {})(Chefs);
