import React, { useState } from 'react'
import './_Signin.scss'

import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { stat } from 'fs'

const Signin: React.FC = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const { UserSignin } = useActions();
    const { data, error, loading } = useTypedSelector(
        (state) => state.UserSignin
    )

    const SignInformSubmition = (e: React.FormEvent) => {
        e.preventDefault();
        UserSignin({
            email: Email,
            password: Password
        })
    }

    return (

        <form onSubmit={SignInformSubmition} className="signin">
            <h2 className="signin_title">Sign in</h2>
            <div className="signin_inputfield" >
                <FaUserAlt className='signin_inputfield_icons' />
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div >
            <div className="signin_inputfield" >
                <RiLockPasswordFill className='signin_inputfield_icons' />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div >
            <input type="submit" value="Login" className="signin_btn" />
            <p className="signin_socialtext" > Or Sign in with social platforms</p >
            <div className="signin_socialmedia" >
                <BsGithub className='signin_icon' />
            </div >
        </form >

    )
}

export default Signin
