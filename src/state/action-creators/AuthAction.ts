import { Dispatch } from 'redux';
import { UserSigninActionType, UserSignupActionType } from '../actiontypes/UserActionTypes';
import { SigninAction, SignupAction } from '../action-models/UserActions';
import request from '../../api'

interface SignupData {
    username: string | number;
    email: string | number;
    password: string | number;
}

interface SigninData {
    email: string | number;
    password: string | number;
}


export const UserSignup = (signupData: SignupData) => {
    return async (dispatch: Dispatch<SignupAction>) => {
        dispatch({
            type: UserSignupActionType.USER_SIGNUP_REQUEST
        });
        try {
            const { data } = await request.post('/api/v1/users/signup/', signupData)
            localStorage.setItem('gfr-user', JSON.stringify(data))
            dispatch({
                type: UserSignupActionType.USER_SIGNUP_SUCCESS,
                payload: data
            })
            dispatch({
                type: UserSignupActionType.LOAD_USER_PROFILE,
                payload: data
            })
        } catch (error: any) {
            console.log(error.response.data);
            dispatch({
                type: UserSignupActionType.USER_SIGNUP_FAIL,
                payload: error.response.data.errors[0].message
            })

        }
    }
}


export const UserSignin = (signinData: SigninData) => {
    return async (dispatch: Dispatch<SigninAction>) => {
        dispatch({
            type: UserSigninActionType.USER_SIGNIN_REQUEST
        });
        try {
            const { data } = await request.post('/api/v1/users/signin', signinData)
            localStorage.setItem('gfr-user', JSON.stringify(data))
            dispatch({
                type: UserSigninActionType.USER_SIGNIN_SUCCESS,
                payload: data
            })
            dispatch({
                type: UserSigninActionType.LOAD_USER_PROFILE,
                payload: data
            })
        } catch (error: any) {
            console.log(error.response.data);
            dispatch({
                type: UserSigninActionType.USER_SIGNIN_FAIL,
                payload: error.response.data.errors[0].message
            })
        }
    }
}


export const UserLogout = () => {
    return async (dispatch: Dispatch<SigninAction | SignupAction>) => {
        try {
            await request.post('/api/v1/users/signout/', {})
            localStorage.removeItem("gfr-user")

            dispatch({
                type: UserSigninActionType.USER_lOGOUT,
                user: null,
                data: null
            })
            dispatch({
                type: UserSignupActionType.USER_lOGOUT,
                user: null,
                data: null
            })
        } catch (error) {
            console.log(error);

        }

    }
}