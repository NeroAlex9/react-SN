import React from "react";
import style from "./MyPost.module.css";
import Post from "./Post/Post";
import { addPost } from "../../../redux/state";

const MyPost = (props) => {
  
  const messageItem = props.postData.map((m) => (
    <Post message={m.message} likeCount={m.like} />
  ));

    
  let butt = React.createRef()
  let text = ()=>{
   
    let buttValue = butt.current.value
    addPost(buttValue)
  }

  return (
    <div className={style.content}>
      <div>My Post</div>
      <div>
        <textarea ref={butt} ></textarea>
        <button onClick={text} >Post</button>
      </div>
      {messageItem}
    </div>
  );
};

export default MyPost;
