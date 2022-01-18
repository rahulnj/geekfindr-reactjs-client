import { Dispatch } from 'redux';
import { UserSignupActionType } from '../actiontypes/UserActionTypes';
import { SignupAction } from '../action-models/UserActions';
import request from '../../api'

interface SignupData {
    username: string | number;
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
            dispatch({
                type: UserSignupActionType.USER_SIGNUP_SUCCESS,
                payload: data
            })
        } catch (error: any) {
            console.log(error);
            dispatch({
                type: UserSignupActionType.USER_SIGNUP_FAIL,
                payload: error
            })

        }
    }

}