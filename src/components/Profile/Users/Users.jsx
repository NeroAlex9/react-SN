import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
  debugger;
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <img className={style.avatar} src={u.avatar} alt="Ava" />
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
