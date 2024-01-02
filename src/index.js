import store from "./redux/state";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let renderEntireTree = (state) => {
  root.render(
    <StrictMode>
      <App state={state} addPost={store.addPost.bind(store)} newText={store.addText.bind(store)} />
    </StrictMode>
  );
};

renderEntireTree(store.renderState());

store.obnovl(renderEntireTree);
