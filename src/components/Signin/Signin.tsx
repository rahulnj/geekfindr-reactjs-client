import React, { useEffect, useState } from 'react'

import './_Signin.scss'

import validator from "@brocode/simple-react-form-validation-helper";

import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useNavigate } from 'react-router-dom'


const Signin: React.FC = () => {
    const [Email, setEmail] = useState<string>('')
    const [Password, setPassword] = useState<string>('')

    const [EmailError, setEmailError] = useState<string>('')
    const [PasswordError, setPasswordError] = useState<string>('')
    const [BlankFieldError, setBlankFieldError] = useState<string>('')

    const { UserSignin } = useActions();

    const { data, error, loading } = useTypedSelector(
        (state) => state.UserSignin
    )

    const SignInformSubmition = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (Email === '' || Password === '') {
            setBlankFieldError('Fill the fields')
        } else if (!EmailError && !PasswordError) {
            UserSignin({
                email: Email,
                password: Password
            })
        }
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
    }, [data, navigate])

    return (

        <form onSubmit={SignInformSubmition} className="signin">
            <h2 className="signin_title">Sign in</h2>
            <div className={EmailError ? "signin_inputfield error_inputfield" : "signin_inputfield"} >
                <FaUserAlt className='signin_inputfield_icons' />
                <input type="text" placeholder="Email" onChange={OnChangeEmailValidator} onBlur={OnBlurEmailValidator} />
            </div >
            <div className='signin_error'>{EmailError}</div>
            <div className={PasswordError ? "signin_inputfield error_inputfield" : "signin_inputfield"} >
                <RiLockPasswordFill className='signin_inputfield_icons' />
                <input type="password" placeholder="Password" onChange={OnChangePasswordValidator} onBlur={OnBlurPasswordValidator} />
            </div >
            <div className='signin_error'>{PasswordError}</div>
            <div className='signin_error'>{BlankFieldError}</div>
            <div className='signin_error'>{error}</div>
            <input type="submit" value="Login" className="signin_btn" />
            <p className="signin_socialtext" > Or Sign in with social platforms</p >
            <div className="signin_socialmedia" >
                <BsGithub className='signin_icon' />
            </div >
        </form >

    )
}

export default Signin;
