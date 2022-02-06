import React, { useState } from 'react';

import "./_UserDetailsForm.scss"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions';


const UserDetailsForm: React.FC = () => {

    const [bio, setBio] = useState('');
    const [organizations, setOrganizations] = useState('');
    const [experience, setExperience] = useState('');
    const [position, setPosition] = useState('');
    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const OnChangeBioValidator = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBio(e.target.value);
    }

    const OnChangeOrganizationValidator = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrganizations(e.target.value);
    }
    const OnChangeExperienceValidator = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setExperience(e.target.value);
        console.log(experience);
    }
    const OnChangePositionValidator = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPosition(e.target.value);
    }
    const OnChangeGithubValidator = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGithub(e.target.value);
    }
    const OnChangeLinkedinValidator = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLinkedin(e.target.value);
    }








    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    const { UserEditProfileDetails } = useActions();


    // const EditUserProfileDetails = (e: React.SyntheticEvent) => {
    //     e.preventDefault();
    //     const editProfileData = {
    //         bio: bio,
    //         organizations: [organizations],
    //         skills: [],
    //         experience: [{ experience }],
    //         education: [{ position }],
    //         works: [{}],
    //         socials: [{ github: github }, { linkedin: linkedin }]
    //     }
    //     UserEditProfileDetails({ token: user.token, editProfileData: editProfileData })
    // }

    return (
        <div className='detailsform'>
            <div className="detailsform_title">Add your details</div>
            <form >
                <div className='detailsform_wrapper'>
                    <div className='detailsform_wrapper_input'>
                        <div className="profile-pic">
                            <label className="-label" htmlFor='file'>
                                <span className="glyphicon glyphicon-camera"></span>
                                <span>Change Profile</span>
                            </label>
                            <input className='imageinput' id="file" type="file" />
                            <img src="https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg" id="output" width="200" alt='profile' />
                        </div>
                    </div>

                    <div className='detailsform_wrapper_input'>
                        <label>Position / Role</label>
                        <input type="text" placeholder='eg: developer, engineer ....' onChange={OnChangePositionValidator} />
                    </div>

                    <div className='detailsform_wrapper_input'>
                        <label>Bio</label>
                        <textarea placeholder='Add Bio' onChange={OnChangeBioValidator} />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Organization</label>
                        <input type="text" placeholder='organization' onChange={OnChangeOrganizationValidator} />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Experience</label>
                        <select placeholder='experience' onChange={OnChangeExperienceValidator}>experience
                            <option value="">select</option>
                            <option value="0-6 months">0-6 mnths</option>
                            <option value="1 year+">1 year +</option>
                            <option value="2 year+">2 year +</option>
                        </select>
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Education</label>
                        <input type="text" placeholder='education' />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>GitHub<AiFillGithub className='detailsform_wrapper_input_icons' size={20} /></label>
                        <input type="text" placeholder='Add profile url' onChange={OnChangeGithubValidator} />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Linkedin<AiFillLinkedin className='detailsform_wrapper_input_icons' size={20} /></label>
                        <input type="text" placeholder='Add profile url' onChange={OnChangeLinkedinValidator} />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <button className="button-skip">Cancel</button>
                        <button type='submit' className="button-submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default UserDetailsForm;
