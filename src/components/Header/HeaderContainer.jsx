import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authUser, setAvatarLogin} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component{
  componentDidMount(){
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
        .then((respons) => {
            // let id = respons.data.data.id
            // let email = respons.data.data.email
            // let login = respons.data.data.login
            let {id,email,login}=respons.data.data
            if(respons.data.resultCode===0){
                this.props.authUser(id, email, login)
            }
            }
        );
  }
  render(){
    return <>
      <Header {...this.props}/>
    </>
  }
};

const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})
export default connect(mapStateToProps, {authUser})(HeaderContainer) ;
