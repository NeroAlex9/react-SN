import React from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <div>
        <NavLink
          to={"/profile"}
          className={(a) => (a.isActive ? style.active : "")}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to={"/dialogs"}
          className={(a) => (a.isActive ? style.active : "")}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to={"/news"}
          className={(a) => (a.isActive ? style.active : "")}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to={"/music"}
          className={(a) => (a.isActive ? style.active : "")}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to={"/settings"}
          className={(a) => (a.isActive ? style.active : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
