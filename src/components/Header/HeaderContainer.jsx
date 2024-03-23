import React, {useEffect, useState} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth_reducer";


const HeaderContainer =(props)=> {


    useEffect(() => {
        props.getAuthUserData()
    }, [props.isAuth]);

  return  <>
      <Header {...props}/>
    </>

};

const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer) ;
