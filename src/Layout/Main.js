import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <h2>Main component</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
