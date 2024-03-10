import React from "react";

import {connect} from "react-redux";
import Profile from "./Profile";

import {setProfileUser} from "../../redux/profile_reducer";
import {usersApi} from "../../Api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
       usersApi.getProfile(this.props.userId)
            .then((data) => {
                    this.props.setProfileUser(data);
                }

            );

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


export default connect(mapStateToProps, {setProfileUser})(ProfileContainer);
