import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ thumbnail, title }) {
  return (
    <div className="bg-card-bg text-white rounded-md border border-card-border-color break-words p-4">
      <div>
        <img
          className="h-[22rem] w-full"
          src={thumbnail}
          alt="movie thumbnail"
        />
        {/**object-cover */}
      </div>
      <Link to="/">
      <div className="mt-4 mb-2 font-medium text-xl leading-[1.2] text-center">{title}</div></Link>
    </div>
  );
}
