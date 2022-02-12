import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './_Header.scss'

import logo from '../../images/logo.png'
import sublogo from '../../images/sublogo.png'
import search from '../../images/search.png'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'


import { AddPostModal } from '../../models'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { Search } from '..'





const Header: React.FC<AddPostModal> = ({ handleToggleSidebar, ToggleAddPostModal }) => {
    const ref = useRef<any>();
    const [ToggleHeader, setToggleHeader] = useState<boolean>(false)
    const { UserLogout } = useActions();

    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )


    const navigate = useNavigate()
    const SignOutHandler = (e: React.FormEvent) => {

        e.preventDefault();
        navigate('/auth')
        UserLogout()

    }

    const ToggleHeaderDropDown = () => {
        setToggleHeader(value => !value)
    }



    useEffect(() => {
        const checkIfClickedOutside = (e: MouseEvent) => {
            if (ToggleHeader && ref.current && !ref.current.contains(e.target)) {
                setToggleHeader(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        };
    }, [ToggleHeader]);

    const ProfileHandler = () => {
        navigate(`/profile/${user?.id}`)
    }

    return (
        <div className="header">
            <div className='header_toggle'>
                <GiHamburgerMenu size={26} onClick={() => handleToggleSidebar()} />
            </div>
            <Link to={'/'}>
                <img className='header_logo' src={logo} alt="" />
                <img className='header_sublogo' src={sublogo} alt="" />
            </Link>
            <Search />
            <div className='header_nav_right' >
                <button className='header_nav_right_button' onClick={() => ToggleAddPostModal()}>Upload</button>

                <div className='header_nav_right_userinfo' onClick={ProfileHandler}>
                    <img className='header_nav_right_userinfo_userImg' src={user?.avatar} alt="" />
                    <span>Hi,{user?.username}</span>
                </div>

                <AiOutlineCaretDown onClick={ToggleHeaderDropDown} className='header_nav_right_arrow' />
            </div>
            <div ref={ref} className={ToggleHeader ? "header_menu active" : "header_menu"}>
                <h3>
                    {user?.username}
                    <br />
                    <span>Web developer</span>
                </h3>
                <ul>
                    <li ><MdSettings className='header_menu_icons' /><span className='header_menu_link'>Settings</span></li>
                    <li ><FaSignOutAlt className='header_menu_icons' /><span className='header_menu_link' onClick={SignOutHandler}>Logout</span></li>
                </ul>
            </div>
        </div >
    )
}

export default Header;
