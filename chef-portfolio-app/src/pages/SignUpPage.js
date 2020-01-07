import React from "react";
import NavBar from "../universal/NavBar";
import Header from "../components/Header";
// import { Link } from "react-router-dom";
import SearchBar from "../universal/SearchBar";
import SignUp from "../components/SignUp";
import Footer from "../universal/Footer";

function SignUpPage(props) {
  return (
    <>
      <NavBar />
      <Header />
      <SearchBar />
      <SignUp />
      <Footer />
    </>
  );
}

export default SignUpPage;
