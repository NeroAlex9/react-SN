import React from "react";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../../Api/api";



const Users = (props) => {
    let pages = Math.ceil(props.pages / props.totalUsersCount)
    let pagesArrey = []
    for(let i =1; i <= pages; i++ ){
        pagesArrey.push(i)
    }



    return <div>
        <ul className={style.list}>
            <p>Pages:</p>
            {pagesArrey.map((e) => {
                return <li onClick={() => {
                    props.updatePage(e)
                }} className={props.activePage === e ? style.active : style.page}>{e}</li>
            })}
        </ul>
        <p>Active page:{props.activePage}</p>


        {props.users.map((u) => (

            <div key={u.id}>

            <span>
                <NavLink onClick={()=>{props.setUserId(u.id)}} to={'/profile/' + u.id}>
              <img
                  className={style.avatar}
                  src={
                      u.photos.small != null
                          ? u.photos.small
                          : "https://cdn.icon-icons.com/icons2/1390/PNG/512/atom_96224.png"
                  }
                  alt="Ava"
              />
                    </NavLink>
              <div>
                {u.followed ? (
                    <button

                        onClick={() => {
                            usersApi.unFollov(u.id)
                                .then((data) => {
                                        if(data.resultCode===0){
                                            props.unFollow(u.id);
                                        }
                                    }
                                );
                        }}
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            usersApi.follov(u.id)
                                .then((data) => {
                                    if(data.resultCode===0){
                                        props.follow(u.id);
                                    }
                                    }
                                );
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
