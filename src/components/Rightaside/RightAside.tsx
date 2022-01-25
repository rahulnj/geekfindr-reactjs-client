import React from 'react'
import { Userinfo } from '..'
import { Profile } from '../../models'
import './_RightAside.scss'




const RightAside: React.FC<Profile> = ({ profile }) => {

    const HomeRightAside = () => {
        return (
            <>
                Home RightAside
            </>
        )
    }

    const ProfileRightAside = () => {
        return (
            <>
                <Userinfo />
            </>
        )
    }

    return (
        <div className={profile ? 'profilerightaside' : 'rightaside'}>
            <div className="rightaside_wrapper">
                {profile ? <ProfileRightAside /> : <HomeRightAside />}
            </div>
        </div>
    )
}

export default RightAside
