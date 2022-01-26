import { combineReducers } from "redux";

import { UserSigninAuthReducer, UserRegisterAuthReducer } from "./AuthReducer";
import { UserProfileDetailsReducer } from "./UserReducer";

const rootReducer = combineReducers({
    UserSignup: UserRegisterAuthReducer,
    UserSignin: UserSigninAuthReducer,
    UserProfileDetails: UserProfileDetailsReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>