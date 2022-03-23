import React, { useState, Fragment, useEffect } from 'react';

import "./_UserDetailsForm.scss"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions';
import { editProfileData, UserData } from '../../models';
import { useNavigate } from 'react-router-dom';


const UserDetailsForm: React.FC = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { UserEditProfileDetails, UserProfileDetails } = useActions();
    const navigate = useNavigate();

    const [bio, setBio] = useState('');
    const [experience, setExperience] = useState('');
    const [position, setPosition] = useState('');
    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const [organizationList, setOrganizationList] = useState<any>([{}]);
    const [educationList, setEducationList] = useState<any>([{}]);

    let { data: editProfileDetails, loading: editProfileDetailsLoading }: any = useTypedSelector(
        (state) => state.UserProfileDetails
    )

    useEffect(() => {
        UserProfileDetails(CurrentUser?.token)
    }, [])

    useEffect(() => {
        let fetchedOrganiztionList, fetchedEducationList;
        fetchedOrganiztionList = editProfileDetails?.organizations?.map((organization: string[]) => {
            return { id: Math.random().toString(36).substr(2, 9), organizations: organization }
        })
        if (fetchedOrganiztionList) {
            setOrganizationList(fetchedOrganiztionList)
        }

        fetchedEducationList = editProfileDetails?.education?.map((education: string[]) => {
            return { id: Math.random().toString(36).substr(2, 9), ...education }
        })
        if (fetchedEducationList) {
            setEducationList(fetchedEducationList)
        }

        if (editProfileDetails) {
            setBio(editProfileDetails?.bio)
            setPosition(editProfileDetails?.role)
            setExperience(editProfileDetails?.experience)

            editProfileDetails?.socials?.map((social: any) => {
                if (social.github) {
                    setGithub(social?.github)
                } else if (social.linkedin) {
                    setLinkedin(social?.linkedin)
                }
            })
        }


    }, [editProfileDetails])

    console.log(editProfileDetails);



    const handleOrganiztionListAdd = () => {
        setOrganizationList([...organizationList, { organizations: '', id: Date.now() }])
    }


    const handleOrganiztionListRemove = (id: any) => {
        let index = organizationList.findIndex((one: any) => {
            return one.id === id;
        })
        const list = [...organizationList]
        list.splice(index, 1)
        setOrganizationList(list)
    }

    const handleEducationListAdd = () => {
        setEducationList([...educationList, { educations: '', id: Date.now() }])
    }
    console.log(educationList);

    const handleEducationListRemove = (id: any) => {
        let index = educationList.findIndex((one: any) => {
            return one.id === id;
        })
        const list = [...educationList]
        list.splice(index, 1)
        setEducationList(list)
    }

    const OnChangeBioValidator = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBio(e.target.value);
    }

    const OnChangeOrganizationValidator = (e: React.ChangeEvent<HTMLInputElement>, index: any) => {
        const { name, value } = e.target
        const list = [...organizationList]
        list[index][name] = value;
        setOrganizationList(list);
    }
    const onChangeEductionValidator = (e: React.ChangeEvent<HTMLInputElement>, index: any) => {
        const { name, value } = e.target
        const list = [...educationList]
        list[index][name] = value;
        setEducationList(list);
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
    let updatedOrganization: string[] = [];
    organizationList.forEach((org: any) => {
        updatedOrganization.push(org.organizations)
    })
    let updatedEducation: string[] = [];
    updatedEducation = educationList.map((edu: any) => {
        return { educations: edu.educations }
    })

    const EditUserProfileDetails = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const editProfileData: editProfileData = {
            role: position,
            bio: bio,
            organizations: updatedOrganization,
            skills: [],
            experience: experience,
            education: updatedEducation,
            works: [],
            socials: [{ github: github }, { linkedin: linkedin }]
        }
        UserEditProfileDetails({
            token: CurrentUser.token,
            editProfileData: editProfileData
        })
        navigate(`/profile/${CurrentUser?.id}`)
    }

    return (
        <div className='detailsform'>
            <div className="detailsform_title">Add your details</div>
            <form onSubmit={EditUserProfileDetails}>
                <div className='detailsform_wrapper'>
                    <div className='detailsform_wrapper_input'>
                    </div>

                    <div className='detailsform_wrapper_input'>
                        <label>Position / Role</label>
                        <input type="text" placeholder='eg: developer, engineer ....' onChange={OnChangePositionValidator}
                            value={position} />
                    </div>

                    <div className='detailsform_wrapper_input'>
                        <label>Bio</label>
                        <textarea placeholder='Add Bio' onChange={OnChangeBioValidator}
                            value={bio} />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Experience</label>
                        <select placeholder='experience' onChange={OnChangeExperienceValidator}
                            value={experience}
                        >experience
                            <option value="">select</option>
                            <option value="0-6 months">0-6 mnths</option>
                            <option value="1 year+">1 year +</option>
                            <option value="2 year+">2 year +</option>
                        </select>
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>GitHub<AiFillGithub className='detailsform_wrapper_input_icons' size={20} /></label>
                        <input type="text" placeholder='Add profile url' onChange={OnChangeGithubValidator}
                            value={github} />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Linkedin<AiFillLinkedin className='detailsform_wrapper_input_icons' size={20} /></label>
                        <input type="text" placeholder='Add profile url' onChange={OnChangeLinkedinValidator}
                            value={linkedin} />
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Education</label>
                        {educationList.map((singleedu: any, index: any) => (
                            <Fragment key={singleedu.id}>
                                <input type="text" placeholder='education' name='educations' onChange={(e) => onChangeEductionValidator(e, index)}
                                    value={singleedu.educations}
                                />
                                <div className='detailsform_actions'>
                                    {educationList.length - 1 === index && educationList.length < 3 && (
                                        <button type='button' className='detailsform_add-btn' onClick={handleEducationListAdd}><span>Add +</span></button>
                                    )}
                                    {educationList.length !== 1 && (
                                        <button type='button' className='detailsform_remove-btn' onClick={() => handleEducationListRemove(singleedu.id)}><span>Remove -</span></button>
                                    )}
                                </div>
                            </Fragment>
                        ))}
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <label>Organization</label>
                        {organizationList.map((singleorg: any, index: any) => (
                            <Fragment key={singleorg.id}>
                                <input type="text" name='organizations' placeholder='organization'
                                    value={singleorg.organizations}
                                    onChange={(e) => OnChangeOrganizationValidator(e, index)} />
                                <div className='detailsform_actions'>
                                    {organizationList.length - 1 === index && organizationList.length < 3 && (
                                        <button type='button' className='detailsform_add-btn' onClick={handleOrganiztionListAdd}><span>Add +</span></button>
                                    )}

                                    {organizationList.length !== 1 && (
                                        <button type='button' className='detailsform_remove-btn' onClick={() => handleOrganiztionListRemove(singleorg.id)}><span>Remove -</span></button>
                                    )}
                                </div>
                            </Fragment>
                        ))}
                    </div>
                    <div className='detailsform_wrapper_input'>
                        <button className="button-skip" onClick={() => navigate(-1)}>Cancel</button>
                        <button type='submit' className="button-submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default UserDetailsForm;
