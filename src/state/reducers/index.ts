import { combineReducers } from "redux";
import { UserSigninAuthReducer, UserRegisterAuthReducer } from "./AuthReducer";

const rootReducer = combineReducers({
    UserSignup: UserRegisterAuthReducer,
    UserSignin: UserSigninAuthReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>