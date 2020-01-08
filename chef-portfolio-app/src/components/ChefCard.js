import React from "react";

//needs to push to chef profile

function ChefCard(props) {
  return (
    <div>
      <img src={props.img} />
      <h3>{props.name}</h3>
      <p>{props.location}</p>
      <p>{props.bio}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default ChefCard;
