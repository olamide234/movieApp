import React, { lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout"
import {HiOutlineFire} from "react-icons/hi2"
import {TbMovie} from "react-icons/tb"
import {SlScreenDesktop} from "react-icons/sl"
import {IoSearchOutline} from "react-icons/io5"

export const appRoutes = [
  {
    icon: <HomeIcon />,
    itemName: "Home",
    path: "/",
    component: lazy(() => import("./components/Home")),
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {appRoutes?.map((appRoute) => {
          const Component = appRoute.component;

          return (
            <Route
              path={appRoute.path}
              element={
                <React.Suspense fallback={<div>Loading</div>}>
                  <Layout routesList={appRoutes}><Component /></Layout>
                  
                </React.Suspense>
              }
              key={appRoute.path}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
