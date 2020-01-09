//map over the array of chefs and render a ChefCard for each chef here
import React, { useEffect } from "react";
import { connect } from "react-redux";
import ChefCard from "../components/ChefCard";
import { getChefs } from "../actions/index";

const Chefs = props => {
  useEffect(() => {
    props.getChefs();
  }, []);

  return (
    <div className="chefCardContainer">
      {/* <button onClick={props.getChefs}>Show Me The Chefs!</button> */}

      {props.chefs.map(chef => (
        <ChefCard
          key={chef.id}
          img={chef.user_picture}
          name={chef.full_name}
          location={chef.location}
          email={chef.email}
          bio={chef.bio}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    chefs: state.chefProfiles.chefs,
    error: state.error
  };
};

export default connect(mapStateToProps, { getChefs })(Chefs);
