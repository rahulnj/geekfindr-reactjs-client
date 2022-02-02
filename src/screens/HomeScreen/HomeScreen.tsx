import React from 'react'
import './_HomeScreen.scss'
import { Feed, PostUploadModal, RightAside } from '../../components'
const HomeScreen: React.FC = () => {
    return (
        <>
            {/* <PostUploadModal /> */}
            <Feed />
            <RightAside />
        </>
    )
}

export default HomeScreen
