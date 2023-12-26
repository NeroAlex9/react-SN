import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { addPost } from "./redux/state";
import App from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);



export let renderEntireTree = (state) =>{

  root.render(
    <StrictMode>
      <App state={state} addPost={addPost} />
    </StrictMode>
  );

}

