import React from "react";
import style from "./Profile.module.css";

import Profileinfo from "./Profileinfo/Profileinfo.jsx";
import MyPostContainer from "./MyPost/MyPostContainer.jsx";

const Profile = (props) => {

  return (
    <div className={style.content}>
      <Profileinfo />
      <MyPostContainer
        store={props.store}
        
      />
    </div>
  );
};

export default Profile;
