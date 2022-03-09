import React, { useEffect, useState } from 'react'

import './_Signup.scss'

import validator from "@brocode/simple-react-form-validation-helper";

import { FaUserAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useNavigate } from 'react-router-dom'
import { AuthState } from '../../models';


const Signup: React.FC = () => {

    const [Username, setUsername] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const [UsernameError, setUsernameError] = useState('')
    const [EmailError, setEmailError] = useState('')
    const [PasswordError, setPasswordError] = useState('')
    const [BlankFieldError, setBlankFieldError] = useState('')

    const { UserSignup } = useActions();
    const { user, data, error, loading }: AuthState = useTypedSelector(
        (state) => state.UserSignup
    );

    const SignUpFormSubmition = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (Username === '' || Email === '' || Password === '') {
            setBlankFieldError('Fill the fields')
        }
        else if (!UsernameError && !EmailError && !PasswordError) {
            UserSignup({
                username: Username,
                email: Email,
                password: Password,
            })
        }
    }

    const OnChangeUsernameValidator = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.target.value);
        validator.nameInputChangeHandler(e.target.value, setUsernameError)
    }
    const OnBlurUsernameValidator = (e: React.FocusEvent<HTMLInputElement>): void => {
        validator.nameInputBlurHandler(e.target.value, setUsernameError)
    }

    const OnChangeEmailValidator = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
        validator.emailInputChangeHandler(e.target.value, setEmailError)
    }
    const OnBlurEmailValidator = (e: React.FocusEvent<HTMLInputElement>): void => {
        validator.emailInputBlurHandler(e.target.value, setEmailError)
    }

    const OnChangePasswordValidator = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
        validator.passwordInputChangeHandler(e.target.value, setPasswordError)
    }
    const OnBlurPasswordValidator = (e: React.FocusEvent<HTMLInputElement>): void => {
        validator.passwordInputBlurHandler(e.target.value, setPasswordError)
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (data) {
            navigate('/')
        }
    }, [data, user, navigate])

    return (

        <form onSubmit={SignUpFormSubmition}  >
            <h2 className="signup_title">Sign up</h2>
            <div className={UsernameError ? "signup_inputfield error_inputfield" : "signup_inputfield"}>
                <FaUserAlt className='signup_inputfield_icons' />
                <input type="text" placeholder="Username" onChange={OnChangeUsernameValidator} onBlur={OnBlurUsernameValidator} />
            </div>
            <div className='signup_error'>{UsernameError}</div>
            <div className={EmailError ? "signup_inputfield error_inputfield" : "signup_inputfield"}>
                <SiGmail className='signup_inputfield_icons' />
                <input type="email" placeholder="Email" onChange={OnChangeEmailValidator} onBlur={OnBlurEmailValidator} />
            </div>
            <div className='signup_error'>{EmailError}</div>
            <div className={PasswordError ? "signup_inputfield error_inputfield" : "signup_inputfield"}>
                <RiLockPasswordFill className='signup_inputfield_icons' />
                <input type="password" placeholder="Password" onChange={OnChangePasswordValidator} onBlur={OnBlurPasswordValidator} />
            </div>
            <div className='signup_error'>{PasswordError}</div>
            <div className='signup_error'>{BlankFieldError}</div>
            <div className='signup_error'>{error}</div>
            <input type="submit" className="signup_btn" value="Sign up" />
            {/* <p className="signup_socialtext">Or Sign up with social platforms</p>
            <div className="signup_socialmedia">
                <BsGithub className='signup_icon' />
            </div> */}
        </form >

    )
}

export default Signup;
