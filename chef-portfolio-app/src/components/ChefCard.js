import React from "react";

//needs to push to chef profile

function ChefCard(props) {
  return (
    <div className="chefCard">
      <img className="chefImage" src={props.img} />
      <h3 className="chefName">{props.name}</h3>
      <p className="chefLocation">{props.location}</p>
      <p className="chefBio">{props.bio}</p>
      <p className="chefEmail">{props.email}</p>
    </div>
  );
}

export default ChefCard;
