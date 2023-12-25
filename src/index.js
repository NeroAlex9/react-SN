import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import state, { addPost } from "./redux/state";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);



let renderEntireTree = () =>{

  root.render(
    <StrictMode>
      <App state={state} addPost={addPost} />
    </StrictMode>
  );

}

renderEntireTree();

