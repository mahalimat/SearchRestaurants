import React, { Fragment } from "react";
import "./App.css";

const Card = ({ name, address, price }) => {
  return (
    <ul className="card">
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
