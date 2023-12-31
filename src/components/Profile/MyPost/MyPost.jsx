import React from "react";
import style from "./MyPost.module.css";
import Post from "./Post/Post";
import store from "../../../redux/store_redux";
import {
  addPostActionCreator,
  newPostActionCreator,
} from "../../../redux/dialogs_reducer";

const MyPost = (props) => {
  const messageItem = props.postData.map((m) => (
    <Post message={m.message} likeCount={m.like} />
  ));

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let text = React.createRef();

  const onPostChange = () => {
    debugger;
    let textValue = text.current.value;
    store.dispatch(newPostActionCreator(textValue));
  };

  let butt = () => {
    let textValue = text.current.value;
    if (textValue.length > 0) {
      addPost(textValue);
      text.current.value = "";
    } else {
      text.current.value = "";
    }
  };

  return (
    <div className={style.content}>
      <div>My Post</div>
      <div>
        <textarea
          ref={text}
          onChange={onPostChange}
          value={props.newPostText}
        />
        <button onClick={butt}>Post</button>
      </div>
      {messageItem}
    </div>
  );
};

export default MyPost;
