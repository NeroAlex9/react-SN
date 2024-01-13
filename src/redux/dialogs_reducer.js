const addPost = "ADD-POST";
const addText = "NEW-TEXT";

export const addPostActionCreator = () => ({ type: addPost });
export const newPostActionCreator = (textValue) => ({
  type: addText,
  newText: textValue,
});

let initState = {
  newPostText: "",
  postData: [
    { message: "Hi", like: "10" },
    { message: "Hello", like: "20" },
  ],
}

const dialogReducer = (state = initState, action) => {

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
    default:
      return state;
  }
};

export default dialogReducer;
