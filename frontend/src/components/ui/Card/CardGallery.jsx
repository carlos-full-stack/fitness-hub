import React from "react";
import CardWithImage from "./CardWithImage";
import Card from "./";
import CardWithDescription from "./CardWithDescription/";
import CardWithPrice from "./CardWithPrice";
import CardWithRating from "./CardWithRating";
import CardWithStats from "./CardWithStats";

const cardTypes = {
  image: CardWithImage,
  description: CardWithDescription,
  price: CardWithPrice,
  rating: CardWithRating,
  stats: CardWithStats,
  default: Card,
};

export default function CardGallery({ type, cards }) {
  const CardComponent = cardTypes[type] || cardTypes.default;

  return (
    <div className="w-full py-8 md:py-10">
      <ul className="flex flex-col lg:flex-row gap-6 w-full justify-center">
        {cards.map((card, index) => (
          <li className="flex-1 gap-6" key={index}>
            <CardComponent {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
