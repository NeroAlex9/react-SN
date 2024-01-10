import { combineReducers, legacy_createStore } from "redux"
import profileReducer from "./profile_reducer"
import dialogReducer from "./dialogs_reducer"

let reducers = combineReducers({
    dialogPage: profileReducer,
    profilePage: dialogReducer,
})



let store = legacy_createStore(reducers)

export default store