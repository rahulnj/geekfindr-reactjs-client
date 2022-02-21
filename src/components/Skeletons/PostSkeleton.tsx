import { BaseSkeleton } from '..'

import './_Skeleton.scss';

const PostSkeleton = () => {
    return (

        <div className='postskeleton'>
            <div className="postskeleton_header">
                <BaseSkeleton type='avatar' />
                <div className="postskeleton_titles">
                    <BaseSkeleton type='title' />
                    <BaseSkeleton type='title-sm' />
                </div>
            </div>
            <BaseSkeleton type='description' />
            <BaseSkeleton type='post' />
        </div>

    )
}

export default PostSkeleton