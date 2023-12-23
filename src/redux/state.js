import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const state = {
  profilePage: {
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
};

export default state;
