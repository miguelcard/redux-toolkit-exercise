import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: "",                       // you can create this state however you want
    age: "",
    email: ""
}

export const userSlice = createSlice(
    {
        name: "user",
        initialState: {                     // initial state of a newly created user                         
            value: initialStateValue
        },
        reducers: {                             // is the "state" argument is NOR the whole state of the application or just the state of the user / of this slice only
            loginUser: (state, action) => {         // the key in the object e.g. "login" is used instead of the action.type constants, then you can just call login() directly, 
                // then no need to have actionCreator() functions setting the action.type nor the action.payload before sending it to each call! 
                // the action.payload will just be what you pass as an argument when calling this function

                // state  = action.payload; // inside createSlice and createReducer we use immer.js by default for immutability (but here a new state is defined, hence it has to be returned)
                // return state;

                state.value = action.payload;

                /**
                 * Reducers of createSlice use immer: the reducers may safely "mutate" the state they are given.
                 * So you can either return a new object that is the new state OR "mutate" it and not return it, from createReducer
                 */

            },
            logoutUser: (state) => {
                // state.value = { name: "", age: "", email: "" }
                // or just:
                state.value = initialStateValue;
            }
            // addBla: (state, action) => { ... }
            // deleteBla(state, action) { ... }  //you can also write it as normall functions like this
        }
    }
);

export default userSlice.reducer;
export const {loginUser, logoutUser} = userSlice.actions;
// to export our actions 
// export const {loginUser, deleteUser, ... } = userSlice.actions;

/**
 * (i) with redux-tools in this section with createSlice we can create the reducers + no need for action functions, just send thee right payload
 * 
 * "for mutiple reducers you can create a new js file under this (features folder) and create a new slice..."
 * 
 * remark: reducers, just take an action and depending on the action type (e.g with switch statement) change the 
 * overall state (store) and return it
 * 
 * remark: action functions (action creators) are just  fcns that return the action object you want to send in the
 * dispatcher, off course this object is created based on variables you pass in the fcn args.. ex:
 * addBug("the bug description")
 * and then you can pass it to the dispatch function e.g.: store.dispatch(addBug("first bug"));
 */