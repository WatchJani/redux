import { createStore, combineReducers } from "redux";
import { userReducer } from "./userReducer";


const store = combineReducers({
    userStore: userReducer
})

export default createStore(store)