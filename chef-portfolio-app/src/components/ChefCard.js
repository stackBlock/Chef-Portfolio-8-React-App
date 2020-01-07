import React from "react";

function ChefCard(props) {
  return (
    <div>
      <img>{props.img}</img>
      <h3>{props.name}</h3>
      <p>{props.location}</p>
      <p>{props.mission}</p>
    </div>
  );
}

export default ChefCard;
