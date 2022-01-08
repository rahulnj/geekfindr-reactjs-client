import React from 'react'
import logo from '../../images/logo.png'
import sublogo from '../../images/sublogo.png'
import search from '../../images/search.png'
import profile from '../../images/profile-pic.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import './_Header.scss'

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className='header_toggle'>
                <GiHamburgerMenu size={26} />
            </div>

            <img className='header_logo' src={logo} alt="" />
            <img className='header_sublogo' src={sublogo} alt="" />

            <form>
                <img src={search} alt="" />
                <input type="text" placeholder='Search' />

            </form>

            <div className='header_nav-right'>
                <img className='header_upload' src="/images/upload.png" alt="" />
                <img className='header_user' src={profile} alt="" />
            </div>
        </div>
    )
}

export default Header
