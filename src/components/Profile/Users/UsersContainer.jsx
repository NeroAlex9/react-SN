import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {activePages, follow, toggleIsFatching, pageSize, setUser, unFollow} from "../../../redux/users_reducer";
import Preloader from "../../common/preloader/Preloader";
import {setUserId} from "../../../redux/profile_reducer";
import {usersApi} from "../../../Api/api";



class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFatching(true)
   usersApi.getUsers(this.props.activePage, this.props.totalUsersCount).then((data) => {
              this.props.toggleIsFatching(false)
              this.props.setUser(data.items);
              this.props.pageSize(data.totalCount);
            }
        );

  };

  updatePage=(e)=>{
    this.props.toggleIsFatching(true)
    this.props.activePages(e);
      usersApi.getUsers(e, this.props.totalUsersCount)
        .then((data) => {
          this.props.toggleIsFatching(false)
              this.props.setUser(data.items);
              this.props.pageSize(data.totalCount);
            }
        )

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
  };
};

// let mapDispatchToProps = (dispatch) => {
//
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID));
//     },
//     unFollow: (userID) => {
//       dispatch(unFollowAC(userID));
//     },
//     setUsers: (users) => {
//       dispatch(setUserAC(users));
//     },
//     pageSize:(page)=>{
//       dispatch(pageSizeAC(page))
//     },
//
//     activePageUpdate:(pageNumber)=>{
//       dispatch(activePageAC(pageNumber))
//     },
//
//     toggleFatching:(fatching)=>{
//       dispatch(isFatchingAc(fatching))
//     },
//
//
//   };
// };
export default connect(mapStateToProps, {follow, unFollow,setUser,pageSize,toggleIsFatching,activePages, setUserId})(UsersContainer);


