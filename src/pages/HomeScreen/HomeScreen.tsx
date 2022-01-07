import React from 'react'
import './_HomeScreen.scss'
import { Header, Sidebar, Feed, RightAside } from '../../components'
const HomeScreen = () => {
    return (
        <>
            <Header />
            <div className="home_container">
                {/* <Sidebar /> */}
                <Feed />
                <RightAside />
            </div>
        </>
    )
}

export default HomeScreen
