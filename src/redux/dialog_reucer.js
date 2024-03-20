const addMessage = "NEW-MESSAGE";

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
  messagesData: [
    { message: "hi" },
    { message: "Hello" },
    { message: "Howe are you?" },
  ],
};



const dialogReducer = (state = initState, action) => {
  switch (action.type) {
    case addMessage: {
      let newMessage = { message: action.newMessage};
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage]
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessage) => ({ type: addMessage, newMessage });

export default dialogReducer;
