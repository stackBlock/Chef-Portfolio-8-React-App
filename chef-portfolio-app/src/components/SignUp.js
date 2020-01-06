import React from "react";
import { connect } from "react-redux";

const SignUp = props => {
  return <div></div>;
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(mapStateToProps, { postNewChefProfile })(SignUp);
