import React from "react";

function RPAuthButtons(props) {
  return (
    <div>
      <button onClick={props.deleteRecipe} className="redButton">Delete Recipe</button>
      <button className="yellowButton">Edit Recipe</button>
      <button className="yellowButton">Create Post</button>
      <button className="yellowButton">My Profile</button>
    </div>
  );
}

export default RPAuthButtons;
