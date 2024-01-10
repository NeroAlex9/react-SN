import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogElement/DialogElement";
import MessageText from "./MessageElement/MessageElement";


const Dialogs = (props) => {
  let textMessage = React.createRef();

  let dialogElement = props.dialogData.map((e) => (
    <DialogItem avatar={e.avatar} name={e.name} id={e.id} />
  ));

  let messageElement = props.messagesData.map((m) => (
    <MessageText message={m.message} />
  ));

  let AddNewMessage = () => {
    props.addMesage();
  };

  let UpdateTextMessage = () => {
    let text = textMessage.current.value;
    props.updateText(text);
  };

  

  return (
    <div className={style.dialogs}>
      <div className={style.users}>{dialogElement}</div>
      <div className={style.messages}>
        {messageElement}
        <div>
          <textarea
            ref={textMessage}
            onChange={UpdateTextMessage}
            value={props.newMessageText}
          ></textarea>{" "}
          <br />
          <button onClick={AddNewMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
