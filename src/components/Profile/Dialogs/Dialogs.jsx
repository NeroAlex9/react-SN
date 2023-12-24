import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogElement/DialogElement";
import MessageText from "./MessageElement/MessageElement";

const Dialogs = (props) => {
  
  let dialogElement = props.stateDialogs.dialogData.map((e) => (
    <DialogItem avatar={e.avatar} name={e.name} id={e.id} />
  ));

  let messageElement = props.stateDialogs.messagesData.map((m) => (
    <MessageText message={m.message} />
  ));

  return (
    <div className={style.dialogs}>
      
      <div className={style.users}>{dialogElement}</div>
      <div className={style.messages}>{messageElement}</div>
    </div>
  );
};

export default Dialogs;

