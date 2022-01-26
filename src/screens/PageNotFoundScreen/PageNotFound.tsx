
import './_PageNotFound.scss'

import errorimg from '../../images/svg/404 Error-amico.svg'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='pagenotfound'>
            <div className="pagenotfound_wrapper">
                <img src={errorimg} alt="Page not found" />
                <div className="pagenotfound_wrapper_details">
                    <h1>Page not found !</h1>
                    <p>The page you were looking for doesn't exist. You may have mistyped <br /> the address or the page may have removed.</p>
                    <Link to="/">
                        <button>Go to home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;
