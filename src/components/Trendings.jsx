import React from "react";
import Container from "./Container";

const actionTextList = [
  "Action",
  "Adventure",
  "Animation",
  "comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
];

export default function Trendings() {
  return (
    <Container>
      <div className="flex flex-wrap gap-y-[0.313rem] gap-x-[0.94rem]">
        {actionTextList.map((actionText, index) => (
          <button
            key={index}
            className="bg-gray-bg text-white capitalize text-[calc(0.75*(1.3rem+0.6vw))] xl:text-[1.315rem] font-bold leading-4 whitespace-nowrap rounded-md mb-2 py-2 px-[0.88rem] leading-[1.2]"
          >
            {actionText}
          </button>
        ))}
      </div>
      <div></div>
      <div></div>
    </Container>
  );
}
