import React from "react";
import { connect } from "react-redux";
import { postNewChefProfile } from "../actions/index";

import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  username: Yup.string()
    .required()
    .min(2),
  password: Yup.string()
    .required()
    .min(3),
  password: Yup.string()
    .required()
    .min(3)
});

const SignUp = props => {
  return (
    <>
      <h1>Sign Up</h1>

      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: ""
        }}
        onSubmit={(values, tools) => {
          tools.resetForm();
          postNewChefProfile(values);
        }}
        validationSchema={userSchema}
        render={props => {
          return (
            <Form className="formContainer">
              <label>
                *Username:
                <Field
                  className="input inputName"
                  name="username"
                  type="text"
                  placeholder="enter username"
                />
              </label>
              {props.errors.username && props.touched.username ? (
                <span className="red">{props.errors.username}</span>
              ) : (
                ""
              )}

              <label>
                *Password:
                <Field
                  className="input inputPassword"
                  name="password"
                  type="text"
                  placeholder="enter password"
                />
              </label>
              {props.errors.password && props.touched.password ? (
                <span className="red">{props.errors.password}</span>
              ) : (
                ""
              )}

              <label>
                *Confirm Password:
                <Field
                  className="input inputConfirmPassword"
                  name="confirmPassword"
                  type="text"
                  placeholder="confirm password"
                />
              </label>
              {props.errors.confirmPassword && props.touched.confirmPassword ? (
                <span className="red">{props.errors.confirmPassword}</span>
              ) : (
                ""
              )}

              <input className="submitButton" type="submit" />
            </Form>
          );
        }}
      />
      <Link to="/sign-in" className="signUpSwitch">
        Already have an account? Sign In!
      </Link>

      <Link to="/" className="guestSignIn">
        Just wanna browse? Continue as a guest.
      </Link>
    </>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(mapStateToProps, { postNewChefProfile })(SignUp);
