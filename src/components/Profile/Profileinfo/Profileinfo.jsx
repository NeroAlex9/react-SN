import React from "react";
import style from "./Profileinfo.module.css";
import Preloader from "../../common/preloader/Preloader";

const Profileinfo = (props) => {
    if(!props.profileUser){
        return <Preloader />
    }
  return (
    <div className={style.content}>
      <div>
        <img
          className={style.photo}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEx4L-JbwplX3RtXxdrjygft007LGEiZrDuuEY6VhnvoYc5rq7euLKsx7_4oo353d-sHs&usqp=CAU"
          alt="headerPhoto"
        />
      </div>
      <div className={style.description}>
           Name: {props.profileUser.fullName}
          <img className={style.ava} src={props.profileUser.photos.small} alt="ava"/>
      </div>
    </div>
  );
};

export default Profileinfo;
