import React from "react";
import Card from "./Card";
import "./App.css";

const CardList = ({ restaurants }) => {
  return (
    <div className="cards">
      {restaurants.map((restaurant, i) => {
        return (
          <Card
            key={i}
            name={restaurants[i].name}
            address={restaurants[i].address}
            price={restaurants[i].price}
          />
        );
      })}
    </div>
  );
};

export default CardList;
