import React, { useState } from "react"

import './_Layout.scss'

import { Header, Sidebar } from ".."
import { Children } from "../../models"





const Layout = ({ children }: Children) => {

    const [sidebar, setSidebar] = useState<boolean>(false)
    const handleToggleSidebar = () => {
        setSidebar(value => !value)
    }

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className='layout_container'>
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
                {children}
            </div>
        </>
    )
}

export default Layout;