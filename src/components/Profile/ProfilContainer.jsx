import React from "react";

import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setProfileUser} from "../../redux/profile_reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
            .then((respons) => {
                    this.props.setProfileUser(respons.data);
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
