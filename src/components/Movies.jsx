import React from "react";
import Container from "./Container";
import FilterButton from "./FilterButton";

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

export default function Movies() {
  return (
    <Container>
      <div className="flex flex-wrap gap-y-[0.313rem] gap-x-[0.94rem]">
        {actionTextList.map((actionText, index) => (
          <FilterButton key={index} actionText={actionText} />
        ))}
      </div>
      <div></div>
      <div></div>
    </Container>
  );
}
