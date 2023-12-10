import React from "react";
import { Routes, Router, Route, Switch } from "react-router-dom";
import Team from "./Pages/Team/Index";
import { NavbarWithMegaMenu } from "../../Components/Navbar/Index";
const routes = () => {
  return (
    <div>
      <NavbarWithMegaMenu />
      <Routes>
        <Route path="/team" element={<Team />}></Route>
      </Routes>
    </div>
  );
};

export default routes;
