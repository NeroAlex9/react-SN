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

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wripper">
        <Header />
        <Nav stateFriends={props.state.dialogPage} />
        <div className="appWriperDialogs">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs stateDialogs={props.state.dialogPage} />}
            />
            <Route
              path="/profile"
              element={
                <Profile
                  stateProfile={props.state.profilePage}
                  newPostText={props.state.profilePage.newPostText}
                  dispatch={props.dispatch}
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
