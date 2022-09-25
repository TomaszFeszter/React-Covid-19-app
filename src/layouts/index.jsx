import React from "react";
import { NavBar } from "../components/NavBar";

export const Page = ({ children, modifier = "" }) => {
  return (
    <div className={`page ${modifier}`}>
      {children}
      <NavBar />
    </div>
  );
};
