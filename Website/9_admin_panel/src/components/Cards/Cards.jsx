import React, { useState } from "react";
import "./Cards.css";
import { CardsData } from "../../Data/Data";
import Card from "../Card/Card";

function Cards() {
  return (
    <div className="cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card
              title={card.title}
              color={card.color}
              barvalue={card.barvalue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
