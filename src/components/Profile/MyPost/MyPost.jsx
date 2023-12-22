import React from "react";
import style from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  const messageItem = props.postData.map((m) => (
    <Post message={m.message} likeCount={m.like} />
  ));

  return (
    <div className={style.content}>
      <div>My Post</div>
      <div>
        <h3>NewPost</h3>
        <input type="text" />
        <button>Post</button>
      </div>
      {messageItem}
    </div>
  );
};

export default MyPost;
