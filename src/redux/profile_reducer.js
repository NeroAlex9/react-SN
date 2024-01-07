const addMessage = "NEW-MESSAGE";
const addMesageText = "NEW-MESSAGE-TEXT";

export const addMessageActionCreator = () => ({ type: addMessage });
export const newMessageActionCreator = (text) => ({
  type: addMesageText,
  newText: text,
});

const profileReducer = (state, action) => {
  switch (action.type) {
    case addMessage: {
      let message = { message: state.newMessageText };
      state.messagesData.push(message);
      state.newMessageText = "";
      return state;
    }
    case addMesageText: {
      state.newMessageText = action.newText;
      return state;
    }
    default:
      return state;
  }
};

export default profileReducer;
