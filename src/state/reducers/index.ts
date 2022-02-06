import { combineReducers } from "redux";

import { UserSigninAuthReducer, UserRegisterAuthReducer } from "./AuthReducer";
import { UserEditProfileDetailsReducer, UserProfileDetailsReducer } from "./UserReducer";

const rootReducer = combineReducers({
    UserSignup: UserRegisterAuthReducer,
    UserSignin: UserSigninAuthReducer,
    UserProfileDetails: UserProfileDetailsReducer,
    UserEditProfileDetails: UserEditProfileDetailsReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>