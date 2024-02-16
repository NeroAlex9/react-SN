import { combineReducers, legacy_createStore } from "redux";
import dialogReducer from "./dialog_reucer";
import usersReducer from "./users_reducer";
import profileReducer from "./profile_reducer";



let reducers = combineReducers({
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
});

let store = legacy_createStore(reducers);

export default store;
