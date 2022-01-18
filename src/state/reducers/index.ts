import { combineReducers } from "redux";
import { SignupAuthReducer } from "./AuthReducer";

const rootReducer = combineReducers({
    SignupAuthReducer: SignupAuthReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>