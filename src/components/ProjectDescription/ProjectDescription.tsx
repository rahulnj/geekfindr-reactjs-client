import React from 'react'

import './_ProjectDescription.scss'

const ProjectDescription = () => {
    return (
        <div className='projectdescription'>
            <div className="projectdescription_header">
                <h3>Brocode</h3>
            </div>
            <hr />
            <div className="projectdescription_short">
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tenetur ad necessitatibus quaerat ipsa deleniti error pariatur debitis mollitia, eveniet.</span>
            </div>
            <div className="projectdescription_long">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempore et consequuntur, optio iusto expedita quia dignissimos quod voluptas officia deleniti. Sunt asperiores eius aliquid ea harum error fugit consequuntur placeat.</p>
            </div>
        </div>
    )
}

export default ProjectDescription