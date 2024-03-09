import React from "react";
import Header from "./Header";
import axios from "axios";


class HeaderContainer extends React.Component{
  componentDidMount(){
    debugger
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
        .then((respons) => {
            
            }
        )
  }

  render(){
    return <>
      <Header />
    </>
  }
};
export default HeaderContainer;
