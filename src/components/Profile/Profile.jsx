import React from "react";
import style from "./Profile.module.css";
import MyPost from "./MyPost/MyPost.jsx";
const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img
          className={style.photo}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEx4L-JbwplX3RtXxdrjygft007LGEiZrDuuEY6VhnvoYc5rq7euLKsx7_4oo353d-sHs&usqp=CAU"
          alt=""
        />
      </div>
      <div>ava+description</div>
      <MyPost />
    </div>
  );
};

export default Profile;
