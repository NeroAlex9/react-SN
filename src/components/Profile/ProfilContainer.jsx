import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileUser} from "../../redux/profile_reducer";


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

let mapStateToProps = (state) => {
    return {
        profileUser: state.profilePage.profileUser,
        userId: state.profilePage.userId

    }
}


export default connect(mapStateToProps, {getProfileUser})(ProfileContainer);
