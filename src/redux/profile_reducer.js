import {profileApi} from "../Api/api";

const addPost = 'ADD-POST';
const addText = 'NEW-TEXT';
const PROFILE_USER = 'PROFILE_USER';
const SET_USER = 'SET_USER'
const SET_STATUS = 'SET_STATUS'



let initState = {
  newPostText: "",
  postData: [
    { message: "Hi", like: "10" },
    { message: "Hello", like: "20" },
  ],
  profileUser: null,
  userId:30662,
  status: "123"
}

const profileReducer = (state = initState, action) => {
  debugger
  switch (action.type) {
    case addPost: {
      let stateCopy = {...state}
      stateCopy.postData=[...state.postData]
      let post = {
        message: stateCopy.newPostText,
        like: "0",
      };
      stateCopy.postData.push(post);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case addText: {
      let stateCopy = {...state}
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case PROFILE_USER:{
      return {...state, profileUser: action.profile}
    }
    case SET_USER:{
      return{...state, userId: action.userId}
    }

    case SET_STATUS:{
      return{...state, status: action.status}
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: addPost });
export const newPostActionCreator = (textValue) => ({
  type: addText,
  newText: textValue,
});

export const setProfileUser = (profile) =>({type: PROFILE_USER, profile})
export const setUserId  = (userId)=>({type: SET_USER, userId})
export const setStatus = (status)=>({type: SET_STATUS, status})

export const getProfileUser = (userId)=>{
  return (dispatch)=>{
    profileApi.getProfile(userId)
        .then((data) => {
              dispatch(setProfileUser(data));
            }
        );
  }
}
export const getStatusUser = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then( response => {
    dispatch(setStatus(response.data))
  })
}
export const updateStatusUser = (status) => (dispatch) => {
  profileApi.updateStatus(status).then( response => {
    if(response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}

export default profileReducer;
