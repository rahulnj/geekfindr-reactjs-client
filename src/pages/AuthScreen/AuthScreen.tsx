import React, { useState } from 'react'
import { Signin, Signup } from '../../components'
import './AuthScreen.scss'

import leftpanelimg from '../../images/svg/Pair programming-rafiki.svg'
import rightpanelimg from '../../images/svg/Pull request-amico.svg'


const AuthScreen: React.FC = () => {
    const [animation, setAnimation] = useState<boolean>(false);

    const handleAnimationClick = (e: React.FormEvent) => {
        e.preventDefault()
        setAnimation(value => !value)
    }




    return (
        <div className={animation ? "authscreen sign-up-mode" : "authscreen"}>
            <div className='authscreen_forms'>
                <div className="authscreen_signinsignup">
                    <div className='sign-in-form'>
                        <Signin />
                    </div>
                    <div className='sign-up-form'>
                        <Signup />
                    </div>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button onClick={handleAnimationClick} className="btn transparent" id="sign-up-btn">
                            Sign up
                        </button>
                    </div>
                    <img src={leftpanelimg} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button onClick={handleAnimationClick} className="btn transparent" id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src={rightpanelimg} className="image" alt="" />
                </div>
            </div>
        </div >
    )
}

export default AuthScreen
