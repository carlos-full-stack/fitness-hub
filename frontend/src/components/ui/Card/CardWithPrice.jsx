import React from "react";
import Card from ".";
import Button from "../Button";

export default function CardWithPrice({ price, title, description }) {
  const children = (
    <div className="flex flex-col justify-between gap-2 p-7 h-full">
      <div>
        <span className="text-5xl">{`${price}€`}</span>
        <h3 className="text-xl pt-2">{title}</h3>
        <p className="py-4">{description}</p>
      </div>
      <Button text="Discover more" />
    </div>
  );

  return <Card children={children} />;
}
