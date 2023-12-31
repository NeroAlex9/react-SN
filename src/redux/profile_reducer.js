const addMessage = "NEW-MESSAGE";
const addMesageText = "NEW-MESSAGE-TEXT";

export const addMessageActionCreator = () => ({ type: addMessage });
export const newMessageActionCreator = (text) => ({
  type: addMesageText,
  newText: text,
});

let initState = {
  dialogData: [
    {
      id: 1,
      name: "Alexey",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Schematicky_atom.png/683px-Schematicky_atom.png",
    },
    {
      id: 2,
      name: "Maria",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg/904px-Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg.png",
    },
    {
      id: 3,
      name: "Sergey",
      avatar: "https://cdn-icons-png.flaticon.com/512/2784/2784386.png",
    },
  ],
  newMessageText: "",
  messagesData: [
    { message: "hi" },
    { message: "Hello" },
    { message: "Howe are you?" },
  ],
};

const profileReducer = (state = initState, action) => {
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
