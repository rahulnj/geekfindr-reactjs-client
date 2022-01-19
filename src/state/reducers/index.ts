import { combineReducers } from "redux";
import { SigninAuthReducer, SignupAuthReducer } from "./AuthReducer";

const rootReducer = combineReducers({
    UserSignup: SignupAuthReducer,
    UserSignin: SigninAuthReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>