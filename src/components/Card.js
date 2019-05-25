import React from "react";
import "./App.css";

const Card = ({ name, address, price, image_url }) => {
  return (
    <li className="card">
      <img src={image_url} className="card-img-top" alt={name} />
      <h2 className="card-items">{name}</h2>
      <p className="card-items">{address}</p>
      <p className="card-items">{Array(price).fill("$")}</p>
    </li>
  );
};

export default Card;
