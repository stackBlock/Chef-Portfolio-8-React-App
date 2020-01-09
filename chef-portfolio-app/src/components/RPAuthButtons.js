import React from "react";
import { useParams } from "react-router-dom";

function RPAuthButtons(props) {
  const { id } = useParams();
  // console.log(id);
  console.log(props);
  return (
    <div>
      <button>Delete Recipe</button>
      <button>Edit Recipe</button>
      <button>Create Post</button>
      <button>My Profile</button>
    </div>
  );
}

export default RPAuthButtons;
