import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
    activePages,
    follow,
    toggleIsFatching,
    pageSize,
    setUser,
    unFollow,
    toggleFollowingProgress,
    getUsers
} from "../../../redux/users_reducer";
import Preloader from "../../common/preloader/Preloader";
import {setUserId} from "../../../redux/profile_reducer";
import {usersApi} from "../../../Api/api";



class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.activePage, this.props.totalUsersCount)

  };

  updatePage=(e)=>{
      this.props.activePages(e);
      this.props.getUsers(e, this.props.totalUsersCount)


  };


  render() {
    return <>
      {this.props.isFatching ?
          <Preloader /> :
          <Users pages={this.props.pages}
                 totalUsersCount={this.props.totalUsersCount}
                 activePage={this.props.activePage}
                 updatePage={this.updatePage}
                 users={this.props.users}
                 follow={this.props.follow}
                 unFollow={this.props.unFollow}
                 setUserId={this.props.setUserId}
                 followingProgress={this.props.followingProgress}
                 toggleFollowingProgress={this.props.toggleFollowingProgress}

      />}

    </>

  }
}


let mapStateToProps = (state) => {

  return {
    users: state.usersPage.users,
    pages: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    activePage: state.usersPage.activePage,
    isFatching:state.usersPage.isFatching,
      followingProgress: state.usersPage.followingProgress
  };
};
export default connect(mapStateToProps, {follow, unFollow,activePages, setUserId, toggleFollowingProgress, getUsers})(UsersContainer);


