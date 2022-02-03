import React, { useState } from "react"

import './_Layout.scss'

import { Header, PostUploadModal, Sidebar } from ".."
import { Children } from "../../models"





const Layout = ({ children }: Children) => {

    const [isSidebar, setIsSidebar] = useState<boolean>(false)
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false)

    const ToggleAddPostModal = () => {
        console.log("yes");
        setIsModalOpened(value => !value)
    }

    const handleToggleSidebar = () => {
        setIsSidebar(value => !value)
    }

    return (
        <>
            <PostUploadModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
            <Header handleToggleSidebar={handleToggleSidebar} ToggleAddPostModal={ToggleAddPostModal} />
            <div className='layout_container'>
                <Sidebar isSidebar={isSidebar} handleToggleSidebar={handleToggleSidebar} />
                {children}
            </div>
        </>
    )
}

export default Layout;