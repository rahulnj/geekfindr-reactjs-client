import React, { useState } from "react"

import './_Layout.scss'

import { Header, Modal, Sidebar } from ".."
import { LayoutProps } from "../../models"





const Layout = ({ children, project }: LayoutProps) => {

    const [isSidebar, setIsSidebar] = useState<boolean>(false)
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false)


    const ToggleAddPostModal = () => {
        setIsModalOpened(value => !value)
    }

    const handleToggleSidebar = () => {
        setIsSidebar(value => !value)
    }

    return (
        <div className="layout">
            <Modal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
            <Header handleToggleSidebar={handleToggleSidebar} ToggleAddPostModal={ToggleAddPostModal} />
            <div className='layout_container'>
                <Sidebar isSidebar={isSidebar} handleToggleSidebar={handleToggleSidebar} project={project} />
                {children}
            </div>

        </div>
    )
}

export default Layout;