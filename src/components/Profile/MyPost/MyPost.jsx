import React from "react";
import style from "./MyPost.module.css";
import Post from "./Post/Post";


const MyPost = (props) => {
 
  const messageItem = props.postData.map((m) => (
    <Post message={m.message} likeCount={m.like} />
  ));

  let newPost = () => {
    props.addPost();
  };

  let text = React.createRef();

  const updatePostChange = () => {
    let textValue = text.current.value;
    props.onPostChange(textValue);
  };

  let butt = () => {
    let textValue = text.current.value;
    if (textValue.length > 0) {
      newPost(textValue);
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
          onChange={updatePostChange}
          value={props.newPostText}
        />
        <button onClick={butt}>Post</button>
      </div>
      {messageItem}
    </div>
  );
};

export default MyPost;
