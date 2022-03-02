import React from 'react'
import { BaseSkeleton } from '..';
import { SidbarProjectSkeletonProps } from '../../models';

const SideBarProjectSkeleton = ({ theme }: SidbarProjectSkeletonProps) => {
    const themeClass = theme;

    return (
        <div className={`sidebarproject ${themeClass}`}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <div className='sidebarproject_single' key={n} >
                    <BaseSkeleton type='thumbnail-sm' />
                    <div className='sidebarproject_title'>
                        <BaseSkeleton type='title-lg' />
                        <BaseSkeleton type='description-sidebar' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SideBarProjectSkeleton