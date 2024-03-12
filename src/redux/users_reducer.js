import {usersApi} from "../Api/api";

let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let PAGE_SIZE="PAGE_SIZE"
let ACTIVE_PAGES = "ACTIVE_PAGES"
let TOGGLE_IS_FATCHING = "TOGGLE_IS_FATCHING"
let TOGGLE_IN_FOLLOW = "TOGGLE_IN_FOLLOW"


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
  followingProgress: [],
  isFatching:false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };


    case SET_USERS:
      return { ...state, users: [...action.users] };

    case PAGE_SIZE:
      return{...state, pageSize: action.page};

    case ACTIVE_PAGES:
      return{...state, activePage: action.pageNumber};

    case TOGGLE_IS_FATCHING:
      return{...state, isFatching: action.fatching };

    case TOGGLE_IN_FOLLOW:
      return{...state, followingProgress:
            action.isFatching
            ? [...state.followingProgress, action.uId]
            : state.followingProgress.filter(uId => uId !== action.uId)
      };

    default:
      return state;
  }
};

export let follow = (userID) => ({ type: FOLLOW, userID });
export let unFollow = (userID) => ({ type: UNFOLLOW, userID });
export let setUser = (users) => ({ type: SET_USERS, users });
export let pageSize = (page)=>({type:PAGE_SIZE, page})

export let toggleIsFatching=(fatching)=>({type:TOGGLE_IS_FATCHING, fatching})

export let activePages = (pageNumber)=>({type:ACTIVE_PAGES, pageNumber})
export let toggleFollowingProgress = (isFatching, uId)=>({type:TOGGLE_IN_FOLLOW, isFatching, uId})


 export const getUsers =(activePage, totalUsersCount)=>{
  return (dispatch)=>{
    dispatch(toggleIsFatching(true));
    usersApi.getUsers(activePage, totalUsersCount).then((data) => {
          dispatch(toggleIsFatching(false));
          dispatch(setUser(data.items));
          dispatch(pageSize(data.totalCount));
        }
    );
  }


}


export default usersReducer;
