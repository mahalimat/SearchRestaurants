import React from "react";
import "./App.css";

const Card = ({ name, address, price }) => {
  return (
    <div className="card">
      <div>
        <h2>Name: {name}</h2>
        <h3>Address: {address}</h3>
        <h3>Price: {price}</h3>
      </div>
    </div>
  );
};

export default Card;
