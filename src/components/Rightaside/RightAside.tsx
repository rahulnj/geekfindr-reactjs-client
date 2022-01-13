import React from 'react'
import { Profile } from '../../models/Model'
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
                <h1>profile RightAside</h1>
            </>
        )
    }

    return (
        <div className='rightaside'>
            <div className="rightaside_wrapper">
                {profile ? <ProfileRightAside /> : <HomeRightAside />}
            </div>
        </div>
    )
}

export default RightAside
