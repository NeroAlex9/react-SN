
import {
  addPostActionCreator
} from "../../../redux/profile_reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";

 let mapStateToProps=(state)=>{
  return {
    postData:state.profilePage.postData,
  }
 }

 let mapDispatchToProps=(dispatch)=>{
  return{
    addPost: (newText)=>{dispatch(addPostActionCreator(newText))} ,
  }

 }
let MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)

export default MyPostContainer;
