import React from "react";
import Container from "./Container";
import MovieCard from "./MovieCard";
import avatar from "../assets/avatar.jpg";

export default function Trendings() {
  return (
    <Container>
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
      <div></div>
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
