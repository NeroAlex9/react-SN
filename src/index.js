import state, { obnovl } from "./redux/state";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { addPost, addText } from "./redux/state";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export let renderEntireTree = (state) => {
  root.render(
    <StrictMode>
      <App state={state} addPost={addPost} newText={addText} />
    </StrictMode>
  );
};

renderEntireTree(state);

obnovl(renderEntireTree);
