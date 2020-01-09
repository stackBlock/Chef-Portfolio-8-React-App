import React from "react";

function RPAuthButtons(props) {
  return (
    <div>
      <button onClick={props.deleteRecipe} className="redButton">Delete Recipe</button>
      <button className="greenButton">Edit Recipe</button>
      <button className="greenButton">Create Post</button>
      <button className="greenButton">My Profile</button>
    </div>
  );
}

export default RPAuthButtons;
