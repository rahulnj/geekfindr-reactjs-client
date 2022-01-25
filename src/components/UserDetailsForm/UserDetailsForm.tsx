import React from 'react';

import "./_UserDetailsForm.scss"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const UserDetailsForm: React.FC = () => {
    return (
        <div className='detailsform'>
            <div className="detailsform_title">Add your details</div>
            <form action="">
                <div className='detailsform_wrapper'>
                    <div className='detailsform_wrapper_input'>
                        <div className="profile-pic">
                            <label className="-label" htmlFor='file'>
                                <span className="glyphicon glyphicon-camera"></span>
                                <span>Change Profile</span>
                            </label>
                            <input className='imageinput' id="file" type="file" />
                            <img src="https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg" id="output" width="200" />
                        </div>
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Username</label>
                        <input type="text" placeholder='username' />
                    </div>


                    <div className='detailsform_wrapper_input'>
                        <label>Bio</label>
                        <textarea placeholder='Add Bio' />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Organization</label>
                        <input type="text" placeholder='organization' />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Experience</label>
                        <select placeholder='experience'>experience
                            <option value="">select</option>
                            <option value="">0-6 mnths</option>
                            <option value="">1 year +</option>
                            <option value="">2 year +</option>
                        </select>
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Position / Role</label>
                        <input type="text" placeholder='eg: developer, engineer ....' />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>GitHub<AiFillGithub className='detailsform_wrapper_input_icons' size={20} /></label>
                        <input type="text" placeholder='Add profile url' />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Linkedin<AiFillLinkedin className='detailsform_wrapper_input_icons' size={20} /></label>
                        <input type="text" placeholder='Add profile url' />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <button className="button-skip">Cancel</button>
                        <button className="button-submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default UserDetailsForm;
