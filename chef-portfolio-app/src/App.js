import React from "react";
import "./App.css";
import GuestHomepage from "./pages/GuestHomepage";
import SignInPage from "./pages/SignInPage";
import NewProfile from "./pages/NewProfile";
import ChefProfile from "./pages/ChefProfile";
import CreatePost from "./components/CreatePost";
import MeetChefs from "./pages/MeetChefs";
import RecipePage from "./pages/RecipePage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={GuestHomepage} />
      <Route exact path="/sign-in" component={SignInPage} />
      <Route exact path="/new-profile" component={NewProfile} />
      <Route exact path="/chef-profile/:id" component={ChefProfile} />
      <Route path="/create-post" component={CreatePost} />
      <Route path="/meet-the-chefs" component={MeetChefs} />
      <Route path="/recipe/:id" component={RecipePage} />
    </div>
  );
}

export default App;
