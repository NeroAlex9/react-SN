import React from "react";

import {
  addMessageActionCreator,
  newMessageActionCreator,
} from "../../../redux/profile_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  
  let store = props.store.getState()

  let newTextMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onTextChange = (text) => {
    props.store.dispatch(newMessageActionCreator(text));
  };

  return <Dialogs addMesage={newTextMessage} updateText = {onTextChange} dialogData={store.dialogPage.dialogData} messagesData={store.dialogPage.messagesData} newMessageText={store.dialogPage.newMessageText} />
};

export default DialogsContainer;
