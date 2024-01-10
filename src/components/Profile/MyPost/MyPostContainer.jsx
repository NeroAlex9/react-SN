import React from "react";
import {
  addPostActionCreator,
  newPostActionCreator,
} from "../../../redux/dialogs_reducer";
import MyPost from "./MyPost";



const MyPostContainer = (props) => {
  let state = props.store.getState()
  
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    props.store.dispatch(newPostActionCreator(text));
  };

  return <MyPost addPost={addPost} onPostChange={onPostChange} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>
};

export default MyPostContainer;
