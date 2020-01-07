import React from "react";
import Page from "../pages/Page";
import { connect } from "react-redux";

function UnauthChefProfile(props) {
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
          {props.chefs.media.map(pic => (
            <div>{pic}</div>
          ))}
        </div>
      </Page>
    </>
  );
}

const mapStateToProps = state => {
  return {
    chefs: state.chefs
  };
};

export default connect(mapStateToProps, {})(UnauthChefProfile);
