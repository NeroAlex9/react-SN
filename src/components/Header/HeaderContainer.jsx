import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authUser} from "../../redux/auth_reducer";
import {usersApi} from "../../Api/api";

class HeaderContainer extends React.Component{
  componentDidMount(){
   usersApi.getMeLoginInfo()
        .then((data) => {
            let {id,email,login}=data.data
            if(data.resultCode===0){
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
