import React from "react";
import Card from "./Card";

const CardList = ({ restaurants }) => {
  return (
    <div>
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
