import dialogReducer from "./profile_reducer";
import profileReducer from "./dialog_reucer";

const store = {
  _state: {
    profilePage: {
      newPostText: "",
      postData: [
        { message: "Hi", like: "10" },
        { message: "Hello", like: "20" },
      ],
    },
    dialogPage: {
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
    },
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
   this._state.profilePage = profileReducer(store._state.profilePage, action);
   this._state.dialogPage = dialogReducer(store._state.dialogPage, action);
    this._renderEntireTree(this._state);
  },

  subscribe(observer) {
    this._renderEntireTree = observer;
  },
};

export default store;

