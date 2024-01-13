import store from "./redux/store_redux";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);



  root.render(

    <StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
      
    </StrictMode>
  );

