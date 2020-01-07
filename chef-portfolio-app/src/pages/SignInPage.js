//render the Header component here
// render two buttons for Chef Sign Up or Guest
//Chef Sign Up will pop open the Sign Up Modal
// render "already have an account" link -- will open the Sign In Modal

//decided that modals would be stretch

import React from "react";
import NavBar from "../universal/NavBar";
import Header from "../components/Header";
// import { Link } from "react-router-dom";
import SearchBar from "../universal/SearchBar";
import SignIn from "../components/SignIn";
import Footer from "../universal/Footer";

function SignInPage(props) {
  // const routeToHomepage = () => {
  //   props.history.push("/");
  // };

  // const routeToNewProfile = () => {
  //   props.history.push("/new-profile");
  // };

  return (
    <>
      <NavBar />
      <Header />
      <SearchBar />
      <h1>I'm the Sign In Page</h1>
      <SignIn />
      {/* <button onClick={routeToNewProfile}>
        Sign Up (this will link off to the sign up component eventually
      </button>
      <button onClick={routeToHomepage}>Guest</button>
      <Link>
        Already have an account? Sign in already!(this will link off to the sign
        in component eventually)
      </Link> */}
      <Footer />
    </>
  );
}

export default SignInPage;
