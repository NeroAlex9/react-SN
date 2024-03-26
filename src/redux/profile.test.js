import React from "react";
import profileReducer, {addPostActionCreator} from "./profile_reducer";

let state = {
    postData: [
        { message: "Hi", like: "10" },
        { message: "Hello", like: "20" },
    ],
}

it('add new post test', ()=>{
    let action = addPostActionCreator("new post added")
    let newState =  profileReducer(state, action)
    expect(newState.postData.length).toBe(3)
})

it('post message = new post added', ()=>{
    let action = addPostActionCreator("new post added")
    let newState =  profileReducer(state, action)
    expect(newState.postData[2].message).toBe("new post added")
})

it('post added', ()=>{
    let action = addPostActionCreator('newText')
    let newState = profileReducer(state, action)
    expect(newState.postData[2].like).toBe(12)
})