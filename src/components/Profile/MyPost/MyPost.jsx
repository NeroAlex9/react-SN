import React from "react";
import style from "./MyPost.module.css";
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";



const MyPost = (props) => {

  const messageItem = props.postData.map((m) => (
    <Post message={m.message} likeCount={m.like} />
  ));

  let onSubmit=(e)=>{
    if(e.postText){
      props.addPost(e.postText)
    }
  }
  let validate=(e)=>{
  }

  const PostForm =()=>{
    return<>
      <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
               <Field
                   name={'postText'}
                   component={"textarea"}
               />
                <button>Post</button>
              </form>
          )}>
      </Form>
      </>
      }

      return (
      <div className={style.content}>
        <div>My Post</div>
        <PostForm />
        {messageItem}
      </div>
  );
};

export default MyPost;
