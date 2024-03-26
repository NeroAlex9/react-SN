import {profileApi} from "../Api/api";
const addPost = 'ADD-POST';
const PROFILE_USER = 'PROFILE_USER';
const SET_USER = 'SET_USER'
const SET_STATUS = 'SET_STATUS'



let initState = {
  postData: [
    { message: "Hi", like: "10" },
    { message: "Hello", like: "20" },
  ],
  profileUser: null,
  userId:30662,
  status: "123"
}

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case addPost: {
      let newPost = {
        message: action.newText,
        like: 12
      };
      return{
        ...state,
        postData: [...state.postData, newPost]
      } ;
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

export const addPostActionCreator = (newText) => ({ type: addPost, newText });

export const setProfileUser = (profile) =>({type: PROFILE_USER, profile})
export const setUserId  = (userId)=>({type: SET_USER, userId})
export const setStatus = (status)=>({type: SET_STATUS, status})

export const getProfileUser = (userId)=> async (dispatch)=>{
    const response = await profileApi.getProfile(userId)
              dispatch(setProfileUser(response));

}
export const getStatusUser = (userId) => async (dispatch) => {
  const response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatusUser = (status) => async (dispatch) => {
  const response = await profileApi.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export default profileReducer;
