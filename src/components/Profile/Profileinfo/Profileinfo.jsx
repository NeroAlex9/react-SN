import React from "react";
import style from "./Profileinfo.module.css";

const Profileinfo = () => {
  return (
    <div className={style.content}>
      <div>
        <img
          className={style.photo}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEx4L-JbwplX3RtXxdrjygft007LGEiZrDuuEY6VhnvoYc5rq7euLKsx7_4oo353d-sHs&usqp=CAU"
          alt=""
        />
      </div>
      <div className={style.description}>ava+description</div>
    </div>
  );
};

export default Profileinfo;
