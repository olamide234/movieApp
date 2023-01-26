import React from "react";
import { useLocation } from "react-router-dom";

export default function Layout({ routesList, children }) {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div>
      <nav>
        {routesList.map((item, index) => (
          <Link to={item.path} key={index}>
            <div
              className=""
            >
              {item.icon}
                <div className="">
                  {item.itemName}
                </div>
            </div>
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </div>
  );
}
