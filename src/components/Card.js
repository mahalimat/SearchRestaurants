import React, { Fragment } from "react";
import "./App.css";

const Card = ({ name, address, price, image_url }) => {
  return (
    <ul className="card">
      <img
        src={image_url}
        className="card-img-top rounded float-left"
        alt={name}
      />

      <li>
        <h2>{name}</h2>
      </li>
      <li>
        <p>{address}</p>
      </li>
      <li>
        <p>${price}</p>
      </li>
    </ul>
  );
};

export default Card;
