import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Settings, FileText, BarChart2 } from "react-feather";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-bar__link nav-bar__link--active" : "nav-bar__link"
        }
      >
        <figure className="nav-bar__link__container">
          <Home />
        </figure>
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          isActive ? "nav-bar__link nav-bar__link--active" : "nav-bar__link"
        }
      >
        <figure className="nav-bar__link__container">
          <BarChart2 />
        </figure>
      </NavLink>
      <NavLink
        to="/news"
        className={({ isActive }) =>
          isActive ? "nav-bar__link nav-bar__link--active" : "nav-bar__link"
        }
      >
        <figure className="nav-bar__link__container">
          <FileText />
        </figure>
      </NavLink>
    </div>
  );
};
