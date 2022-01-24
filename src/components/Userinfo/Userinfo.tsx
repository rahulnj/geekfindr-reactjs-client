import React from 'react';

import './_Userinfo.scss'

import { GiOfficeChair } from 'react-icons/gi'
import { GrOrganization, GrCertificate } from 'react-icons/gr'
import { FaBusinessTime } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

const Userinfo: React.FC = () => {
    return (
        <div className='userinfo'>
            <h3>Info</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt illo .</p>
            <hr />
            <ul >
                <li><GiOfficeChair className='userinfo_icons' size={26} />
                    <details className='userinfo_details'>
                        <summary className='userinfo_summary'>Work<IoIosArrowForward className='arrow' /></summary>
                        <div className="detailscontent">
                            <p>crossroads academy</p>
                        </div>
                    </details>
                </li>
                <hr />
                <li><GrOrganization className='userinfo_icons' size={26} />
                    <details className='userinfo_details'>
                        <summary className='userinfo_summary'>Organization<IoIosArrowForward className='arrow' /></summary>
                        <div className="detailscontent">
                            <p>crossroads academy</p>
                        </div>
                    </details>
                </li>
                <hr />
                <li><FaBusinessTime className='userinfo_icons' size={26} />
                    <details className='userinfo_details'>
                        <summary className='userinfo_summary'>Experience<IoIosArrowForward className='arrow' /></summary>
                        <div className="detailscontent">
                            <p>crossroads academy</p>
                        </div>
                    </details>
                </li>
                <hr />
                <li><GrCertificate className='userinfo_icons' size={26} />
                    <details className='userinfo_details'>
                        <summary className='userinfo_summary'>Education<IoIosArrowForward className='arrow' /></summary>
                        <div className="detailscontent">
                            <p>crossroads academy</p>
                        </div>
                    </details>
                </li>
            </ul>
        </div>
    )
};

export default Userinfo;
