import { createPortal } from 'react-dom'

import './_Spinner.scss'

interface spinner {
    loader: boolean
}

const Spinner = ({ loader }: spinner) => {

    if (!loader) {
        return null;
    }

    return createPortal(
        <>
            <div className='spinner_overlay'></div>
            <div className='spinner'>
                <div className='spinner_dot'></div>
                <div className='spinner_dot'></div>
                <div className='spinner_dot'></div>
                <div className='spinner_dot'></div>
                <div className='spinner_dot'></div>
            </div>
        </>,
        document.getElementById('loader') as HTMLElement
    )
}

export default Spinner