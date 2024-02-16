import React from "react";
import "./style.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/Profile/News/News.jsx";
import Music from "./components/Profile/Music/Music.jsx";
import Settings from "./components/Profile/Settin/Settings.jsx";
import Friends from "./components/Profile/Friends/Friends.jsx";
import DialogsContainer from "./components/Profile/Dialogs/DialogsContainer.jsx";
import store from "./redux/store_redux.js";
import UsersContainer from "./components/Profile/Users/UsersContainer.jsx";
import ProfileContainer from "./components/Profile/ProfilContainer";


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
              />}
            />
            <Route
              path="/profile/*"
              element={
                <ProfileContainer
                  store = {store}
                />
              }
            />
            <Route path="/users" element={<UsersContainer />} />
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
