import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogElement/DialogElement";
import MessageText from "./MessageElement/MessageElement";
import { addMessageActionCreator, newMessageActionCreator } from "../../../redux/state";



const Dialogs = (props) => {


  let textMessage = React.createRef();


  let newTextMessage=()=>{
    props.dispatch(addMessageActionCreator())
  }

  let onTextChange=()=>{
    let text = textMessage.current.value;
    props.dispatch(newMessageActionCreator(text))
  }

  let dialogElement = props.stateDialogs.dialogData.map((e) => (
    <DialogItem avatar={e.avatar} name={e.name} id={e.id} />
  ));

  let messageElement = props.stateDialogs.messagesData.map((m) => (
    <MessageText message={m.message} />
  ));

 

  return (
    <div className={style.dialogs}>
      <div className={style.users}>{dialogElement}</div>
      <div className={style.messages}>
        {messageElement}
        <div>
          <textarea ref={textMessage} onChange={onTextChange} value={props.newMessageText}></textarea> <br />
          <button onClick={newTextMessage} >Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
