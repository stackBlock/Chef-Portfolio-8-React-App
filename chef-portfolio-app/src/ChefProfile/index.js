import React from "react";

import AuthChefProfile from "./AuthChefProfile";
import UnauthChefProfile from "./UnauthChefProfile";

function ChefProfile() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  return <>{token ? <AuthChefProfile user={user} /> : <UnauthChefProfile />}</>;
}

export default ChefProfile;
