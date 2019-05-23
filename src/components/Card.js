import React, { Fragment } from "react";
import "./App.css";

const Card = ({ name, address, price }) => {
  return (
    <ul className="card">
      <Fragment>
        <h2>Name: {name}</h2>
        <h3>Address: {address}</h3>
        <h3>Price: {price}</h3>
      </Fragment>
    </ul>
  );
};

export default Card;
