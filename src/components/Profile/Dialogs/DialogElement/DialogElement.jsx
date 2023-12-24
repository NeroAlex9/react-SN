import React from "react";
import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
   
  return (
    <div className={`${style.item} ${style.active}`}>
      <NavLink className={style.name} to={"/dialog/" + props.id}>
        {<img className={style.avatar} src={props.avatar} />}
        {props.name}
        
      </NavLink>
    </div>
  );
};

export default DialogItem;
