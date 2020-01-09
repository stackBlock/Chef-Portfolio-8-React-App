import React from "react";

function RPAuthButtons(props) {
  // const { id } = useParams();
  // console.log(id);
  console.log(props);
  return (
    <div>
      {/* <button>Delete Recipe</button>
      <button>Edit Recipe</button> */}
      <button className="greenButton">Create Post</button>
      <button className="greenButton">My Profile</button>
    </div>
  );
}

export default RPAuthButtons;
