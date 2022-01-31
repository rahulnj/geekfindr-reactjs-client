import React, { useState, useRef, useEffect } from 'react'
import logo from '../../images/logo.png'
import sublogo from '../../images/sublogo.png'
import search from '../../images/search.png'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'

import './_Header.scss'

import { Handle } from '../../models'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { Link, useNavigate } from 'react-router-dom'





const Header: React.FC<Handle> = ({ handleToggleSidebar }) => {
    const ref = useRef<any>();
    const [ToggleHeader, setToggleHeader] = useState<boolean>(false)
    const { UserLogout } = useActions();

    const { data, user }: any = useTypedSelector(
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
        const checkClickedOutside = (e: any): void => {
            if (ToggleHeader && ref.current && !ref.current.contains(e.target)) {
                setToggleHeader(false)
            }
        }
        document.addEventListener("mousedown", checkClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkClickedOutside)
        };
    }, [ToggleHeader]);


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

            <div className='header_nav_right' >
                {/* <img className='header_upload' src="/images/upload.png" alt="" /> */}
                <Link to={`/profile/${data?.id}`} style={{ textDecoration: 'none' }}>
                    <div className='header_nav_right_userinfo'>
                        <img className='header_nav_right_userImg' src={user?.avatar} alt="" />
                        <span>Hi,{user?.username}</span>
                    </div>
                </Link>
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

export default Header
