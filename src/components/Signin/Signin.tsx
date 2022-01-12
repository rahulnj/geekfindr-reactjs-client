import React from 'react'
import './Signin.scss'

import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'


const Signin: React.FC = () => {


    const formSub = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("login");

    }
    return (

        <form onSubmit={formSub} className="signin">
            <h2 className="signin_title">Sign in</h2>
            <div className="signin_inputfield" >
                <FaUserAlt className='signin_inputfield_icons' />
                <input type="text" placeholder="Username" />
            </div >
            <div className="signin_inputfield" >
                <RiLockPasswordFill className='signin_inputfield_icons' />
                <input type="password" placeholder="Password" />
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
