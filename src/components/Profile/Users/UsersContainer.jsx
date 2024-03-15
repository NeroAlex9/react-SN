import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
    activePages,
    getUsers, followUser, unFollowUser
} from "../../../redux/users_reducer";
import Preloader from "../../common/preloader/Preloader";
import {setUserId} from "../../../redux/profile_reducer";



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
                 setUserId={this.props.setUserId}
                 followingProgress={this.props.followingProgress}
                 followUsers={this.props.followUser}
                 unFollowUser={this.props.unFollowUser}

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
export default connect(mapStateToProps, {activePages, setUserId, getUsers, followUser, unFollowUser})(UsersContainer);


