import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img alt={'logo'} src="https://quto.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2022/11/25/12/5684943/1c083588bd64ad812756bfb0429de0f7108892cc.jpg"></img>
      <div >
          {props.isAuth
              ? <div className={s.login}>{props.login}</div>
              : < NavLink to={'/login'} className={s.login}>Login</NavLink>
          }

        </div>
    </header>
  );
};
export default Header;
