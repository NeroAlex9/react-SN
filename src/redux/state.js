const store = {
  _renderEntireTree(){
    console.log("rend");
  },
    _state:{
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
  
      messagesData: [
        { message: "hi" },
        { message: "Hello" },
        { message: "Howe are you?" },
      ],
    },
  },

  renderState(){
    return this._state
  },

  addText  (newText) {
    this._state.profilePage.newPostText = newText;
    this._renderEntireTree(this._state);
  },
  
  addPost (newMesage) {
    let post = {
      message: newMesage,
      like: "0",
    };
    this._state.profilePage.postData.push(post);
    this._state.profilePage.newPostText = "";
    this._renderEntireTree(this._state);
  },

   obnovl (observer)  {
    this._renderEntireTree = observer;
  },

}

export default store;
