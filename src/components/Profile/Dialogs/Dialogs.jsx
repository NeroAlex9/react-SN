import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.name + " " + style.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageText = (props) => {
  return <div className={style.messageItem}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.users}>
        <DialogItem name="Alexey" id="1" />
        <DialogItem name="Maria" id="2" />
        <DialogItem name="Sergey" id="3" />
      </div>
      <div className={style.messages}>
        <MessageText message="Hi" />
        <MessageText message="Hello" />
        <MessageText message="Howe are you?" />
      </div>
    </div>
  );
};

export default Dialogs;
