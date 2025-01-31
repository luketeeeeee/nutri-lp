import { JSX } from "react";

export default function HomePageCard({
  img,
  cardText,
}: {
  img: JSX.Element;
  cardText: string;
}) {
  return (
    <div className="first:mt-[-90px] flex gap-2 rounded-md text-background text-lg items-center font-semibold py-4 bg-opacity-90 bg-gradient-to-bl from-green-500 to-primary drop-shadow-md w-60 justify-center">
      {img}
      <h3>{cardText}</h3>
    </div>
  );
}
