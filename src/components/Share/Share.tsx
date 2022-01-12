import React from 'react'
import './_Share.scss'
import profile from '../../images/profile-pic.png'
import { MdPostAdd } from 'react-icons/md'
import { GoFileMedia } from 'react-icons/go'



const Share: React.FC = () => {
    return (
        <div className='share'>
            <div className="share_wrapper">
                <div className="share_top">
                    <img src={profile} alt="" />
                    <input type="text" placeholder='Whats on your mind' />
                </div>
                <hr />
                <div className="share_bottom">
                    <div className="share_options">
                        <div className="share_option">
                            <MdPostAdd size={26} className='share_icon' />
                            <span>Projects</span>
                        </div>
                        <div className='share_option'>
                            <GoFileMedia size={21} />
                            <span>Posts</span>
                        </div>
                    </div>
                    <button>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
