import React from "react";

export default function FilterButton({ actionText }) {
  return (
    <button className="bg-gray-bg text-white capitalize text-[calc(0.75*(1.3rem+0.6vw))] xl:text-[1.315rem] font-bold whitespace-nowrap rounded-md mb-2 py-[0.4rem] px-[0.88rem] leading-[1.2]">
      {actionText}
    </button>
  );
}
