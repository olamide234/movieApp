import React, { useState } from "react";
import Container from "./Container";
import FilterButton from "./FilterButton";
import MovieCard from "./MovieCard";
import avatar from "../assets/avatar.jpg";

export default function Movies() {
  const totalPages = 9;
  const [page, setPage] = useState(1);
  const pagesArray = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }
  return (
    <Container>
      <div className="flex flex-wrap gap-y-[0.313rem] gap-x-[0.94rem]">
        {actionTextList.map((actionText, index) => (
          <FilterButton key={index} actionText={actionText} />
        ))}
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-x-8 gap-y-12">
          {moviesList.map((movie, index) => (
            <MovieCard
              key={index}
              thumbnail={movie.thumbnail}
              title={movie.title}
            />
          ))}
        </div>
      </div>

      <div className="flex  flex-wrap justify-center mt-12 mx-auto p4">
        <div className="mb-4 flex flex-wrap text-white justify-center gap-3">
          <button
            className="bg-[#252525] text-lg py-2 px-3 rounded-[0.313rem] ease-linear duration-200  hover:bg-[#00ce79] hover:text-black"
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </button>
          {pagesArray.map((pageNum) => (
            <button
              className={
                page === pageNum
                  ? "text-lg py-2 px-3 rounded-[0.313rem] ease-linear duration-200 bg-[#00ce79] text-black"
                  : "bg-[#252525] text-lg py-2 px-3 rounded-[0.313rem] ease-linear duration-200 hover:bg-[#00ce79] hover:text-black"
              }
              disabled={page === pageNum}
              onClick={() => {
                setPage(pageNum);
              }}
            >
              {pageNum}
            </button>
          ))}
          <button
            className="bg-[#252525] text-lg py-2 px-3 rounded-[0.313rem] ease-linear duration-200 a hover:bg-[#00ce79] hover:text-black "
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </Container>
  );
}

const moviesList = [
  { thumbnail: avatar, title: "Puss in Boots: The Last Wish" },
  { thumbnail: avatar, title: "M3GAN" },
  { thumbnail: avatar, title: "Avatar: The Way of Water" },
  { thumbnail: avatar, title: "The Enforcer" },
  { thumbnail: avatar, title: "Devotion" },
  { thumbnail: avatar, title: "Violet Night" },
  { thumbnail: avatar, title: "Salvage Salvation" },
  { thumbnail: avatar, title: "Puss in Boots: The Last Wish" },
  { thumbnail: avatar, title: "M3GAN" },
  { thumbnail: avatar, title: "Avatar: The Way of Water" },
  { thumbnail: avatar, title: "The Enforcer" },
  { thumbnail: avatar, title: "Devotion" },
  { thumbnail: avatar, title: "Violet Night" },
  { thumbnail: avatar, title: "Salvage Salvation" },
  { thumbnail: avatar, title: "Puss in Boots: The Last Wish" },
  { thumbnail: avatar, title: "M3GAN" },
  { thumbnail: avatar, title: "Avatar: The Way of Water" },
  { thumbnail: avatar, title: "The Enforcer" },
  { thumbnail: avatar, title: "Devotion" },
  { thumbnail: avatar, title: "Violet Night" },
  { thumbnail: avatar, title: "Salvage Salvation" },
];

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
