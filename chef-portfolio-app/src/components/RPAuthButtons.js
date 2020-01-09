import React from "react";
import { useParams } from "react-router-dom";

function RPAuthButtons(props) {
  const { id } = useParams();
  // console.log(id);
  console.log(props);
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
