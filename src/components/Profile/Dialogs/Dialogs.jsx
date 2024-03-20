import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogElement/DialogElement";
import MessageText from "./MessageElement/MessageElement";
import {Navigate} from "react-router-dom";
import {Field, Form} from "react-final-form";


const Dialogs = (props) => {
  let dialogElement = props.dialogData.map((e) => (
      <DialogItem avatar={e.avatar} name={e.name} id={e.id}/>
  ));

  let messageElement = props.messagesData.map((m) => (
      <MessageText message={m.message}/>
  ));



  let onSubmit = (e) => {
    props.addMesage(e.messageText);
  }
  let validate = (e) => {
  }

  const MessageForm = () => {
    return<>
      <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({handleSubmit}) => (
              <form className={style.form} onSubmit={handleSubmit}>
                <Field
                    name={'messageText'}
                    component={"textarea"}
                />
                <button>Отправить</button>
              </form>
          )}>
      </Form>
    </>

  }

  if (!props.isAuth) {
    return <Navigate to='/login'/>
  }
  return (
      <div className={style.dialogs}>
        <div className={style.users}>{dialogElement}</div>
        <div className={style.messages}>
          {messageElement}
          <div>
            <MessageForm />
          </div>
        </div>
      </div>
  );
};

export default Dialogs;
