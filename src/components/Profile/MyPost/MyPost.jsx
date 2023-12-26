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
    if(buttValue.length>0)
    {addPost(buttValue)
       butt.current.value = ""
      }
      else{
        butt.current.value = ""
      }
    
  }

  return (
    <div className={style.content}>
      <div>My Post</div>
      <div>
        <textarea ref={butt} placeholder="Введите текст" ></textarea>
        <button onClick={text} >Post</button>
      </div>
      {messageItem}
    </div>
  );
};

export default MyPost;
