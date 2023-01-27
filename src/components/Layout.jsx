import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Layout({ routesList, children }) {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className="bg-black-bg h-screen">
      <nav className="sticky bg-nav-bg py-2">
        <div className="flex flex-wrap items-center justify-between w-full sm:w-[75%] mx-auto px-3 ">
          <Link
            to="#"
            className="font-bold text-white whitespace-nowrap text-xl mr-4 py-[0.3125rem]"
          >
            MoviesHub
          </Link>
          <div className="flex flex-row items-center flex-grow">
            <div className="flex overflow-visible gap-4">
              {routesList.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="text-light-gray flex items-center no-underline"
                >
                  <div className="mr-[0.375rem]">{item.icon}</div>
                  {item.itemName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}
