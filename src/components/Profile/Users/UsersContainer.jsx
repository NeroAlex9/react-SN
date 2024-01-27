import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {activePageAC, followAC, pageSizeAC, setUserAC, unFollowAC} from "../../../redux/users_reducer";



let mapStateToProps = (state) => {

  return {
    users: state.usersPage.users,
    pages: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    activePage: state.usersPage.activePage,
  };
};

let mapDispatchToProps = (dispatch) => {

  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unFollow: (userID) => {
      dispatch(unFollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUserAC(users));
    },
    pageSize:(page)=>{
      dispatch(pageSizeAC(page))
    },

    activePageUpdate:(pageNumber)=>{
      dispatch(activePageAC(pageNumber))
    }

  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
