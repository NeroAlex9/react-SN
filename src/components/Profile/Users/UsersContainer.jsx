import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setUserAC, unFollowAC } from "../../../redux/users_reducer";


let mapStateToProps=(state)=>{
    return {
        users: state.usersPage.users
    }
     
}

let mapDispatchToProps=(dispatch)=>{
    return {
        follow: (userID)=>{
            dispatch(followAC(userID))
        },
        unFollow: (userID)=>{
            dispatch(unFollowAC(userID))
        },
        setUsers: (users)=>{
            dispatch(setUserAC(users))
        },

    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
    
export default UsersContainer;