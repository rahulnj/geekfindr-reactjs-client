import React from 'react'
import './Signup.scss'

import { FaUserAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'


const Signup: React.FC = () => {
    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("signup");

    }

    return (
        <form onSubmit={formSubmit} >
            <h2 className="signup_title">Sign up</h2>
            <div className="signup_inputfield">
                <FaUserAlt className='signup_inputfield_icons' />
                <input type="text" placeholder="Username" />
            </div>
            <div className="signup_inputfield">
                <SiGmail className='signup_inputfield_icons' />
                <input type="email" placeholder="Email" />
            </div>
            <div className="signup_inputfield">
                <RiLockPasswordFill className='signup_inputfield_icons' />
                <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="signup_btn" value="Sign up" />
            <p className="signup_socialtext">Or Sign up with social platforms</p>
            <div className="signup_socialmedia">
                <BsGithub className='signup_icon' />
            </div>
        </form>
    )
}

export default Signup
