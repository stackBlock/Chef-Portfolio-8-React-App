import React from "react";

function RPAuthButtons(props) {
  return (
    <div>
      <button onClick={props.deleteRecipe}>Delete Recipe</button>
      <button>Edit Recipe</button>
      <button>Create Post</button>
      <button>My Profile</button>
    </div>
  );
}

export default RPAuthButtons;
