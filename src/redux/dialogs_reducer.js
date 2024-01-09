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
      let post = {
        message: state.newPostText,
        like: "0",
      };
      state.postData.push(post);
      state.newPostText = "";
      return state;
    }
    case addText: {
      state.newPostText = action.newText;
      return state;
    }
    default:
      return state;
  }
};

export default dialogReducer;
