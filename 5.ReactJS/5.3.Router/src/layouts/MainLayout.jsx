import React from "react";
import Nav from "./MainLayout/Nav/Nav";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
