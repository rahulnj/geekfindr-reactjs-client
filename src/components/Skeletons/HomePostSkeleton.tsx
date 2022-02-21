import { BaseSkeleton } from ".."
import { HomePostSkeletonProps } from "../../models"




const HomePostSkeleton = ({ theme }: HomePostSkeletonProps) => {
    const themeClass = theme;
    return (
        <div className={`homepostskeleton ${themeClass}`}>
            <div className="homepostskeleton_header">
                <BaseSkeleton type='avatar-md' />
                <div className="homepostskeleton_titles">
                    <BaseSkeleton type='title' />
                    <BaseSkeleton type='title-sm' />
                </div>
            </div>
            <BaseSkeleton type='description-sm' />
            <BaseSkeleton type='post-sm' />
        </div>
    )
}

export default HomePostSkeleton