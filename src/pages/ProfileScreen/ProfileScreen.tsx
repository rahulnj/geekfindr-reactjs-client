import React from 'react'
import './_ProfileScreen.scss'

import person1 from '../../images/profile-pic.png'
import post1 from '../../assets/posts/3.jpeg'
import { Feed, RightAside } from '../../components'


const ProfileScreen: React.FC = () => {
    return (
        <div className='profile'>
            <div className="profile_righttop">
                <div className='profile_righttop_profilecover'>
                    <img className='profile_righttop_profilecoverImg' src={post1} alt="" />
                    <img className='profile_righttop_profileuserImg' src={person1} alt="" />
                </div>
                <div className="profile_profileinfo">
                    <h4>justin</h4>
                    <span>backend Developer</span>
                </div>
            </div>
            <div className="profile_rightbottom">
                <Feed />
                <RightAside profile />
            </div>
        </div>
    )
}

export default ProfileScreen
