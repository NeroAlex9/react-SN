import React from "react";
import style from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div className={style.content}>
      <div>My Post</div>
      <div>
        <p>NewPost</p>
        <input type="text" />
        <button>Post</button>
      </div>
      <Post message="Hi" />
      <Post message="Hello" />
    </div>
  );
};

export default MyPost;
