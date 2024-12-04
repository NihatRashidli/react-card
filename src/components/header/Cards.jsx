import React from "react";
import "./Cards.css"; // Stil faylını daxil edin.
import { Fa500Px } from "react-icons/fa";

import { FaCarBattery } from "react-icons/fa";
import { FaEarlybirds } from "react-icons/fa";

const Cards = () => {
  const cardData = [
    {
      title: "Card 1",
      description: "This is the description of the first card.",
      icons: <Fa500Px />,
    },
    {
      title: "Card 2",
      description: "This is the description of the second card.",
      icons: <FaEarlybirds style={{ color: 'red' }} />,
    },
    {
      title: "Card 3",
      description: "This is the description of the third card.",
      icons: <FaCarBattery />,
    },
  ];

  return (
    <div className="cardContainer">

      {cardData.map(({ title, icons, description }, index) => (
        <div className={`card ${index === 1 ? "highlight" : ""}`} key={index}>
          <i>{icons}</i>
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="btn">Read More</button>

        </div>
      ))}
    </div>
  );
};

export default Cards;
