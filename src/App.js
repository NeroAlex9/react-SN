import React from "react";
import "./style.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Profile/Dialogs/Dialogs.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/Profile/News/News.jsx";
import Music from "./components/Profile/Music/Music.jsx";
import Settings from "./components/Profile/Settin/Settings.jsx";
import Friends from "./components/Profile/Friends/Friends.jsx";
import DialogsContainer from "./components/Profile/Dialogs/DialogsContainer.jsx";
import store from "./redux/store_redux.js";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wripper">
        <Header />
        <Nav store= {store} />
        <div className="appWriperDialogs">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<DialogsContainer
              store={store}
              
              //    stateDialogs={props.state.dialogPage} 
              // dispatch={props.dispatch}
              // newMessageText ={props.state.dialogPage.newMessageText} 
              />}
            />
            <Route
              path="/profile"
              element={
                <Profile
                  store = {store}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends/*" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
