import React from "react";
import style from "./Profile.module.css";
import MyPost from "./MyPost/MyPost.jsx";
import Profileinfo from "./Profileinfo/Profileinfo.jsx";
const Profile = () => {
  return (
    <div className={style.content}>
      <Profileinfo />
      <MyPost />
    </div>
  );
};

export default Profile;
