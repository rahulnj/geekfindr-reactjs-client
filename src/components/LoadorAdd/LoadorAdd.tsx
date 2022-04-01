import React from 'react'

import './_LoadorAdd.scss'

import { ProfileProps } from '../../models'

const LoadorAdd: React.FC<ProfileProps> = () => {

    return (
        <div className='loadoradd'>
            <div className="loadoradd_wrapper">
                <h1>No Posts Yet </h1>
            </div>
        </div>
    )
}

export default LoadorAdd