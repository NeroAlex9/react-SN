import React from "react";
import style from "./Users.module.css";
import axios from "axios";

const Users = (props) => {
  const loadUsers = () => {
    if (props.users.length < 10) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((respons) => {
          props.setUsers(respons.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={loadUsers}>Load Users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <img
              className={style.avatar}
              src={
                u.photos.small != null
                  ? u.photos.small && u.photos
                  : "https://cdn.icon-icons.com/icons2/1390/PNG/512/atom_96224.png"
              }
              alt="Ava"
            />
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
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
