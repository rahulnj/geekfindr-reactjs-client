import React, { useEffect, useState } from 'react'

import './_LoadorAdd.scss'

import { ProfileProps } from '../../models'
import { Params, useParams } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

const LoadorAdd: React.FC<ProfileProps> = ({ profile }) => {

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