import React from "react";
import {
  addPostActionCreator,
  newPostActionCreator,
} from "../../../redux/dialogs_reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";



// const MyPostContainer = (props) => {
//   let state = props.store.getState()
  
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   const onPostChange = (text) => {
//     props.store.dispatch(newPostActionCreator(text));
//   };

//   return <MyPost addPost={addPost} onPostChange={onPostChange} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>
// };

 let mapStateToProps=(state)=>{
  return {
    postData:state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
 }

 let mapDispatchToProps=(dispatch)=>{
  return{
    addPost: ()=>{dispatch(addPostActionCreator())} ,
    onPostChange: (text)=>{dispatch(newPostActionCreator(text))} 
  }

 }
let MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)

export default MyPostContainer;
