import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const postData = [
  { message: "Hi", like: "10" },
  { message: "Hello", like: "20" },
];

const dialogData = [
  { id: 1, name: "Alexey" },
  { id: 2, name: "Maria" },
  { id: 3, name: "Sergey" },
];

const messagesData = [
  { message: "hi" },
  { message: "Hello" },
  { message: "Howe are you?" },
];

root.render(
  <StrictMode>
    <App
      postData={postData}
      messagesData={messagesData}
      dialogData={dialogData}
    />
  </StrictMode>
);
