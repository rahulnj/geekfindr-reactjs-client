import React from 'react'
import './_HomeScreen.scss'
import { Feed, RightAside } from '../../components'
const HomeScreen: React.FC = () => {
    return (
        <>
            <Feed />
            <RightAside />
        </>
    )
}

export default HomeScreen
