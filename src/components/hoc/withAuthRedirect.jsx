import React, {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

export const withAuthRedirect=(Component)=>{

     let RedirectComponent=(props)=> {
         const [isAuth, setIsAuth]=useState(props.isAuth)
         debugger
         useEffect(()=>{
             setIsAuth(props.isAuth)
         },[props.isAuth])

        return  <>
    {
    !isAuth ?  <Navigate to='/login'/> : <Component {...props}/>
    }
    </>
    }
    return RedirectComponent
}