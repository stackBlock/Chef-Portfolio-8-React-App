import React, {useState} from "react";
import NavBar from "../universal/NavBar";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import SearchBar from "../universal/SearchBar";
import Footer from "../universal/Footer";



const userSchema = Yup.object().shape({
  username: Yup.string().required().min(2),
  password: Yup.string().required().min(3)
});

function SignInPage(props) {
  const routeToHomepage = () => {
    props.history.push("/");
  };

  const routeToNewProfile = () => {
    props.history.push("/new-profile");
  };

  const [users, setUsers] = useState([]);

  return (
    <>
      <NavBar />
      <Header />
      <SearchBar />
      <h1>Sign In</h1>

      <Formik 
          initialValues={{
            username: "",
            password: ""
          }}
          onSubmit={(values, tools) => {
            tools.resetForm();
            axios.post('https://reqres.in/api/users', values)
              .then(res => {
                console.log('SUCCESSFUL', res)
                console.log(res.data)

                const userData = res.data;

                setUsers([...users, userData]);
              })
              .catch(err => {
                console.log('FAILURE: ', err)
              })
          }}
          validationSchema={userSchema}
          render={props => {
            return(
              <Form className="formContainer">
                <label>
                  *Usernameame:
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

                <input className="submitButton" type="submit"/>

                <button className="signUpSwitch">Don't have an account? Sign up!</button>

                <button className="guestSignIn" onClick={routeToHomepage}>Just wanna browse? Continue as a guest.</button>
              </Form>
            )
          }}
        />
      <h1>I'm the Sign In Page</h1>
      <button onClick={routeToNewProfile}>
        Sign Up (this will link off to the sign up component eventually
      </button>
      <button onClick={routeToHomepage}>Guest</button>
      <Link to="">
        Already have an account? Sign in already!(this will link off to the sign
        in component eventually)
      </Link>
      <Footer />
    </>
  );
}

export default SignInPage;