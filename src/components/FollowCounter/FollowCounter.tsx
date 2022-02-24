import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './_FollowCounter.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ProfileProps, UserData, UsersState } from '../../models'
import { Modal } from '..'
import { useActions } from '../../hooks/useActions'


const FollowCount = ({ userProfile }: ProfileProps) => {

    const [followersModal, setFollowersModal] = useState(false)
    const [followingModal, setFollowingModal] = useState(false)


    const { GetUserFollowers, GetFollowingUsers, FollowUser } = useActions();


    const { data: user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    const { data: UsersPosts }: any = useTypedSelector(
        (state) => state.GetUsersPosts
    )

    const { data: MyPosts }: any = useTypedSelector(
        (state) => state.GetMyPost
    )

    let { data: Followings }: any = useTypedSelector(
        (state) => state.GetFollowingUsers
    )

    let { data: UserDetails }: any = useTypedSelector(
        (state) => state.GetUserDetails
    )

    let { data: UserProfileDetails }: any = useTypedSelector(
        (state) => state.UserProfileDetails
    )
    const { success: FollowUserSuccess }: any = useTypedSelector(
        (state) => state.FollowUser
    )

    if (!userProfile) {
        UserDetails = UserProfileDetails
    }


    useEffect(() => {

        GetFollowingUsers({
            token: user.token,
            userId: user.id,
        })

    }, [FollowUserSuccess])

    if (typeof (UserDetails?.id) !== 'undefined') {
        if (UserDetails?.id !== user?.id) {
            let isFollowing = false;
            Followings?.every((following: UserData) => {
                isFollowing = following?.id === UserDetails?.id
                if (isFollowing == true) {
                    return false;
                }
                return true;
            })
            UserDetails = { ...UserDetails, isFollowing: isFollowing }
        }
    }

    const HandleFollowUser = async (id: string) => {
        FollowUser({
            token: user.token,
            id
        })
    }

    const ShowFollowersList = () => {
        GetUserFollowers({
            token: user.token,
            userId: user.id,
        })
        setFollowersModal(true)
    }

    const ShowFollowingList = () => {
        GetFollowingUsers({
            token: user.token,
            userId: user.id,
        })
        setFollowingModal(true)
    }




    return (
        <>
            <Modal followersModal={followersModal} setFollowersModal={setFollowersModal}
                followingModal={followingModal} setFollowingModal={setFollowingModal}
            />
            <div className='followcounter'>
                <div className="followcounter_wrapper">
                    <div className='followcounter_wrapper_left'>
                        {userProfile ? <div className='followcounter_wrapper_left_items'>
                            <span>{UsersPosts.length}</span>
                            <p>Posts</p>
                        </div> :
                            <div className='followcounter_wrapper_left_items'>
                                <span>{MyPosts.length}</span>
                                <p>Posts</p>
                            </div>}
                        {userProfile ? <div className='followcounter_wrapper_left_items'

                        >
                            <span>{UserDetails?.followersCount}</span>
                            <p>followers</p>
                        </div> : <div className='followcounter_wrapper_left_items'
                            onClick={ShowFollowersList}
                        >
                            <span>{UserDetails?.followersCount}</span>
                            <p>followers</p>
                        </div>}
                        {userProfile ? <div className='followcounter_wrapper_left_items'
                        >
                            <span>{UserDetails?.followingCount}</span>
                            <p>following</p>
                        </div> : <div className='followcounter_wrapper_left_items'
                            onClick={ShowFollowingList}
                        >
                            <span>{UserDetails?.followingCount}</span>
                            <p>following</p>
                        </div>}
                    </div>
                    <div className='followcounter_wrapper_right'>
                        {userProfile ?
                            (UserDetails?.isFollowing ? <button className="button-edit">Following</button> :
                                <button className="button-follow" onClick={() => HandleFollowUser(UserDetails?.id)}>Follow</button>) :
                            (<Link to={`/editprofile/${UserDetails?.id}`}>
                                <button className="button-edit">Edit</button>
                            </Link>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowCount
