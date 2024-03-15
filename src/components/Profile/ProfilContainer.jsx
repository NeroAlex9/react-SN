import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileUser} from "../../redux/profile_reducer";
import {Navigate} from "react-router-dom";



class ProfileContainer extends React.Component {
    componentDidMount() {
       this.props.getProfileUser(this.props.userId)

    };

    render() {
        if(!this.props.isAuth){
            return  <Navigate to='/login'/>
        }
        return <>
            <Profile {...this.props} />
        </>
    }

};

let mapStateToProps = (state) => {
    return {
        profileUser: state.profilePage.profileUser,
        userId: state.profilePage.userId,
        isAuth: state.auth.isAuth

    }
}


export default connect(mapStateToProps, {getProfileUser})(ProfileContainer);
