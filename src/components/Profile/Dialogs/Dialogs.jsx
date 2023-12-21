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

const dialogData = [
  { id: 1, name: "Alexey" },
  { id: 2, name: "Maria" },
  { id: 3, name: "Sergey" },
];

const dialogElement = dialogData.map((e) => (
  <DialogItem name={e.name} id={e.id} />
));

const MessageText = (props) => {
  return <div className={style.messageItem}>{props.message}</div>;
};

const messageData = [
  { message: "hi" },
  { message: "Hello" },
  { message: "Howe are you?" },
];

const messageElement = messageData.map((m) => (
  <MessageText message={m.message} />
));

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.users}>{dialogElement}</div>
      <div className={style.messages}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;
