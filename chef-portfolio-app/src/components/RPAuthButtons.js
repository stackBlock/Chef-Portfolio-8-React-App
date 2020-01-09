import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function RPAuthButtons(props) {
  const { id } = useParams();
  // console.log(id);
  console.log(props);
  return (
    <div>

      {/* <button>Delete Recipe</button>
      <button>Edit Recipe</button> */}
<<<<<<< HEAD
      <Link to="/create-post">
        <button className="greenButton">Create Post</button>
      </Link>
      <Link to={`/chef-profile/${id}`}>
        <button className="greenButton">My Profile</button>
      </Link>
=======

      <button className="greenButton">Create Post</button>
      <button className="greenButton">My Profile</button>



>>>>>>> 2194d0e41cfa2df1856e65f4f1a3cbfd2ab35479
    </div>
  );
}

export default RPAuthButtons;
