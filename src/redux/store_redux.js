import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialogs_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
  dialogPage: profileReducer,
  profilePage: dialogReducer,
  usersPage: usersReducer,
});

let store = legacy_createStore(reducers);

export default store;
