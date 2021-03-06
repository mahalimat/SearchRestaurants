import React from "react";
import Card from "./Card";
import "./App.css";

const CardList = ({ restaurants }) => {
  return (
    <ul className="cards">
      {restaurants.map((restaurant, i) => {
        return (
          <Card
            key={i}
            image_url={restaurants[i].image_url}
            name={restaurants[i].name}
            address={restaurants[i].address}
            price={restaurants[i].price}
          />
        );
      })}
    </ul>
  );
};

export default CardList;
