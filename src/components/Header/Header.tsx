import React, { useState } from 'react'
import logo from '../../images/logo.png'
import sublogo from '../../images/sublogo.png'
import search from '../../images/search.png'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'

import './_Header.scss'
import { Handle } from '../../models/Model'
import { useTypedSelector } from '../../hooks/useTypedSelector'





const Header: React.FC<Handle> = ({ handleToggleSidebar }) => {

    const [ToggleHeader, setToggleHeader] = useState<boolean>(false)

    let { data }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    let { data: signUpData } = useTypedSelector(
        (state) => state.UserSignup
    )
    if (!data) {
        data = signUpData;
    }

    const SignOutHandler = () => {
        //add signout
    }

    const ToggleHeaderDropDown = () => {
        setToggleHeader(value => !value)
    }

    return (
        <div className="header">
            <div className='header_toggle'>
                <GiHamburgerMenu size={26} onClick={() => handleToggleSidebar()} />
            </div>

            <img className='header_logo' src={logo} alt="" />
            <img className='header_sublogo' src={sublogo} alt="" />

            <form>
                <img src={search} alt="" />
                <input type="text" placeholder='Search' />

            </form>

            <div className='header_nav_right' onClick={ToggleHeaderDropDown}>
                {/* <img className='header_upload' src="/images/upload.png" alt="" /> */}
                <div className='header_nav_right_userinfo'>
                    <img className='header_user' src={data?.avatar} alt="" />
                    <span>Hi,{data?.username}</span>
                </div>
                <AiOutlineCaretDown className='header_nav_right_arrow' />
            </div>
            <div className={ToggleHeader ? "header_menu active" : "header_menu"}>
                <h3>
                    {data?.username}
                    <br />
                    <span>Web developer</span>
                </h3>
                <ul>
                    <li ><MdSettings className='header_menu_icons' /><span className='header_menu_link'>Settings</span></li>
                    <li ><FaSignOutAlt className='header_menu_icons' /><span className='header_menu_link' onClick={SignOutHandler}>Logout</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
