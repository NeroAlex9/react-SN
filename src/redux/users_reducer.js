import React from "react";


let follow = 'FOLLOW'
let unFollow = 'UNFOLLOW'
let setUsers = 'SET_USERS'

let initialState = {
    users:[
        {id:1, name: "Alexey", avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Schematicky_atom.png/683px-Schematicky_atom.png", followed: true, status: "Holder", location:{city : "New-York", country:"USA"}},
    {id:1, name: "Maria", avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg/904px-Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg.png", followed: true, status: "New holder", location:{city : "Moskow", country:"Russia"}},
    {id:1, name: "Sergey", avatar:"https://cdn-icons-png.flaticon.com/512/2784/2784386.png", followed: false, status: "Old holder", location:{city : "Gomel", country:"Belarus"}}
]
}

const usersReducer = (state = initialState, action)=>{
    debugger;
    switch(action.type){
        case follow:
            return{
                ...state.users.map(u=>{
                    if(u.id === action.userID){
                        return {...u, followed: true}
                    }
                })
            }

        case unFollow:
            return{
                ...state.users.map(u=>{
                    if(u.id === action.userID){
                        return {...u, followed: false}
                    }
                })
            }

        case setUsers:
            return{...state, users:[...state.users, ...action.users]}  

        default:
            return state;
    }

}

export let followAC = (userID)=>({type: follow, userID})
export let unFollowAC=(userID)=>({type: unFollow, userID})
export let setUserAC = (users)=>({type: setUsers, users})

export default usersReducer