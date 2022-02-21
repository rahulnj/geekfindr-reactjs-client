import { BaseSkeleton } from '..';
import { FollowCounterSkeletonProps } from '../../models';
import './_Skeleton.scss';

const FollowCounterSkeleton = ({ theme }: FollowCounterSkeletonProps) => {
    const themeClass = theme;

    return (
        <div className={`followcounterskeleton ${themeClass}`}>
            <BaseSkeleton type='rectangle' />
        </div>
    )
}

export default FollowCounterSkeleton