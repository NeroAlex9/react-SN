import React from "react";

import {
  addMessageActionCreator,
  newMessageActionCreator,
} from "../../../redux/dialog_reucer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
  
//   let store = props.store.getState()

//   let newTextMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };

//   let onTextChange = (text) => {
//     props.store.dispatch(newMessageActionCreator(text));
//   };

//   return <Dialogs addMesage={newTextMessage} updateText = {onTextChange} dialogData={store.dialogPage.dialogData} messagesData={store.dialogPage.messagesData} newMessageText={store.dialogPage.newMessageText} />
// };

let mapStateToProps =(state)=>{
  return{
    dialogData:state.dialogPage.dialogData,
    messagesData: state.dialogPage.messagesData,
    newMessageText: state.dialogPage.newMessageText,
    isAuth: state.auth.isAuth
  }
}


let mapDispatchToProps = (dispatch)=>{
  return{
    addMesage: ()=>dispatch(addMessageActionCreator()),
    updateText: (text)=>(dispatch(newMessageActionCreator(text)))

  }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
 

export default DialogsContainer;
