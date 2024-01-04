import React from "react";
import style from "./Profile.module.css";
import MyPost from "./MyPost/MyPost.jsx";
import Profileinfo from "./Profileinfo/Profileinfo.jsx";

const Profile = (props) => {
  return (
    <div className={style.content}>
      <Profileinfo />
      <MyPost
        postData={props.stateProfile.postData}
        dispatch ={props.dispatch}
        postText={props.newPostText}
      />
    </div>
  );
};

export default Profile;
