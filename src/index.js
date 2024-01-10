import store from "./redux/store_redux";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let renderEntireTree = (state) => {
  root.render(
    <StrictMode>
      <App state={state}  dispatch={store.dispatch.bind(store)} store ={store} />
    </StrictMode>
  );
};

renderEntireTree(store.getState());

store.subscribe(()=>{
  let state = store.getState()
  renderEntireTree(state)});
