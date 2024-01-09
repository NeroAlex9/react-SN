import { combineReducers, createStore } from "redux"
import profileReducer from "./profile_reducer"
import dialogReducer from "./dialogs_reducer"

let reducers = combineReducers({
    dialogPage: profileReducer,
    profilePage: dialogReducer,
})

let store = createStore(reducers)

export default store