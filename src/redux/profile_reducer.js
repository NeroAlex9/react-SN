const addPost = "ADD-POST";
const addText = "NEW-TEXT";
const PROFILE_USER = 'PROFILE_USER'



let initState = {
  newPostText: "",
  postData: [
    { message: "Hi", like: "10" },
    { message: "Hello", like: "20" },
  ],
  profileUser: null,
}

const profileReducer = (state = initState, action) => {
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

export default profileReducer;
