import './_Skeleton.scss';
import { SkeletonTheme } from 'react-loading-skeleton'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonProps } from '../../models';

const BaseSkeleton = ({ type }: SkeletonProps) => {
    const classes = `skeleton ${type}`
    return (
        <SkeletonTheme baseColor="#e7eaf0" highlightColor="#fdfdfd">
            <Skeleton className={classes} />
        </SkeletonTheme >
    )
}

export default BaseSkeleton