import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileUser} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {
       this.props.getProfileUser(this.props.userId)

    };

    render() {
        return <>
            <Profile {...this.props} />
        </>
    }

};

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
let mapStateToProps = (state) => {
    return {
        profileUser: state.profilePage.profileUser,
        userId: state.profilePage.userId,
        isAuth: state.auth.isAuth

    }
}



export default compose(
    connect(mapStateToProps, {getProfileUser}),
    withAuthRedirect
)(ProfileContainer);
