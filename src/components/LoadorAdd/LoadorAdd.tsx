import React, { useEffect, useState } from 'react'

import './_LoadorAdd.scss'

import { Profile } from '../../models'
import { Params, useParams } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

const LoadorAdd: React.FC<Profile> = ({ profile }) => {

    // const { GetUsersPosts } = useActions();

    // const { userId }: Readonly<Params<string>> = useParams()

    // const [isUser, setIsUser] = useState(true)

    // let { user }: any = useTypedSelector(
    //     (state) => state.UserSignin
    // )

    // useEffect(() => {
    //     if (typeof (userId) !== 'undefined') {
    //         if (userId !== user.id) {
    //             setIsUser(false)
    //         }
    //     }
    // }, [isUser, userId])

    // const LoadUsersPost = (userId: string | undefined) => {
    //     GetUsersPosts({
    //         token: user.token,
    //         userId
    //     })
    // }

    return (
        <div className='loadoradd'>
            <div className="loadoradd_wrapper">
                <h1>No Posts Yet </h1>
                {/* <button className='loadoradd_upload'>Upload</button> */}
            </div>
            {/* <button className='loadoradd_upload'>Load Posts</button> */}


        </div>
    )
}

export default LoadorAdd