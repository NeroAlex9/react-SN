import React from "react";
import style from "./Users.module.css";



const Users = (props) => {

    let pages = Math.ceil(props.pages / props.totalUsersCount)
    let pagesArrey = []
    for(let i =1; i <= pages; i++ ){
        pagesArrey.push(i)
    }
    debugger
    return <div>
        <div>
            {pagesArrey.map((e) => {
                return <span onClick={() => {
                    props.updatePage(e)
                }} className={props.activePage === e ? style.active : style.page}>{` ${e}`}</span>
            })}
        </div>


        {props.users.map((u) => (

            <div key={u.id}>
            <span>
              <img
                  className={style.avatar}
                  src={
                      u.photos.small != null
                          ? u.photos.small
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
}

export default Users;
