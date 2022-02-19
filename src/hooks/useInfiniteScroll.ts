import React, { useEffect, useState } from 'react'

import request from '../api';

import { UserData } from '../models';



export const useInfiniteScroll = ({ lastPostId }: any) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

    const [feedPosts, setFeedPosts] = useState<any>([])
    const [hasMore, setHasMore] = useState(false)

    console.log(lastPostId, "..............");

    useEffect(() => {
        setFeedPosts([])
    }, [lastPostId])


    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const { data } = await request.get('/api/v1/posts/my-feed', {
                    params: {
                        limit: 5,
                        lastId: lastPostId
                    },
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${CurrentUser?.token}`,
                    },
                })
                setFeedPosts((prevPosts: any) => {
                    return [...new Set([...prevPosts, ...data])]
                })
                setHasMore(data.length > 0)
            } catch (error: any) {
                console.log(error);
            }
        }
        fetchFeed()
    }, [lastPostId])

    return { feedPosts, hasMore };
}

