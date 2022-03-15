import React, { useEffect, useState } from 'react'

import request from '../api';

import { PostData, UserData } from '../models';

interface useInfiniteScrollProps {
    lastPostId: any
}

export const useInfiniteScroll = ({ lastPostId }: useInfiniteScrollProps) => {

    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

    const [feedPosts, setFeedPosts] = useState<PostData[]>([])
    const [hasMore, setHasMore] = useState(false)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        const fetchFeed = async () => {
            try {
                const { data } = await request.get<PostData[]>('/api/v1/posts/my-feed', {
                    params: {
                        limit: 5,
                        lastId: lastPostId
                    },
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${CurrentUser?.token}`,
                    },
                })
                setFeedPosts((prevPosts) => {
                    return [...new Set([...prevPosts, ...data])]
                })
                setHasMore(data.length > 0)
                setLoading(false)
            } catch (error: any) {
                console.log(error);
            }
        }
        fetchFeed()
    }, [lastPostId])

    return { feedPosts, hasMore, loading, setFeedPosts };
}

