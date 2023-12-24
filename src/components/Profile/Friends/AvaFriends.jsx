import React from "react";
import style from './AvaFriends.module.css'
import { NavLink } from "react-router-dom";

const AvaFriends=(props)=>{

 

    return <div className={style.bestFriendsBlock}>
        <div className={style.friendsItem}>
            <NavLink to={`/dialog/${props.id}`} ><img className={style.avaBestFriends} src={props.avatar} alt="" />
        <div>{props.name}</div></NavLink> 
        </div>
        
    </div>
}

export default AvaFriends