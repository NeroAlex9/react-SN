import React from "react";
import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${style.item} ${style.active}`}>
      <NavLink className={style.name} to={path}>
        {<img className={style.avatar} src={props.avatar} />}
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
