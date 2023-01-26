import React from "react";

export default function Container({ children }) {
  return <div className="w-full sm:w-[80%] mx-auto mt-6 px-3">{children}</div>;
}