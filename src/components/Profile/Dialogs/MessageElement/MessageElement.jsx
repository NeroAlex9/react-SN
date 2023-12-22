import React from "react";
import style from "./../Dialogs.module.css";

const MessageText = (props) => {
  return <div className={style.messageItem}>{props.message}</div>;
};

export default MessageText;
