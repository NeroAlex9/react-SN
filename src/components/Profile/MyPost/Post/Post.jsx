import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.post}>
      <img
        className={style.ava}
        src="https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-atom-icon-png-image_6092415.png"
        alt=""
      />
      {props.message} <br />
      like {props.likeCount}
    </div>
  );
};

export default Post;
