import React from "react";
import {type} from "@testing-library/user-event/dist/type";

let follow = "FOLLOW";
let unFollow = "UNFOLLOW";
let setUsers = "SET_USERS";
let pageSize="PAGE_SIZE"
let activePage = "ACTIVE_PAGE"

let initialState = {
  users: [

    // {
    //   id: 1,
    //   name: "Alexey",
    //   photos:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Schematicky_atom.png/683px-Schematicky_atom.png",
    //   followed: true,
    //   status: "Holder",
    //   location: { city: "New-York", country: "USA" },
    // },
    // {
    //   id: 2,
    //   name: "Maria",
    //   photos:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg/904px-Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg.png",
    //   followed: true,
    //   status: "New holder",
    //   location: { city: "Moskow", country: "Russia" },
    // },
    // {
    //   id: 3,
    //   name: "Sergey",
    //   photos: "https://cdn-icons-png.flaticon.com/512/2784/2784386.png",
    //   followed: false,
    //   status: "Old holder",
    //   location: { city: "Gomel", country: "Belarus" },
    // },
  ],
  pageSize:0,
  totalUsersCount:10,
  activePage:1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case follow:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case unFollow:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };


    case setUsers:
      return { ...state, users: [...action.users] };

    case pageSize:
      return{...state, pageSize: action.page}

    case activePage:
      return{...state, activePage: action.pageNumber}

    default:
      return state;
  }
};

export let followAC = (userID) => ({ type: follow, userID });
export let unFollowAC = (userID) => ({ type: unFollow, userID });
export let setUserAC = (users) => ({ type: setUsers, users });
export let pageSizeAC = (page)=>({type:pageSize, page})

export let activePageAC = (pageNumber)=>({type:activePage, pageNumber})

export default usersReducer;
