import { JSX } from "react";

export default function HomePageCard({
  img,
  cardText,
}: {
  img: JSX.Element;
  cardText: string;
}) {
  return (
    <div className="first:mt-[-90px] lg:first:mt-0 flex gap-2 rounded-md text-background text-lg items-center font-semibold py-4 bg-[#7ab41d] drop-shadow-lg w-60 justify-center">
      {img}
      <h3>{cardText}</h3>
    </div>
  );
}
