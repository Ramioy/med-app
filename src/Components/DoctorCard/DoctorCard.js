import React from 'react'
import '../DoctorCard/DoctorCard.css'

const DoctorCard = ({ name, speciality, experience, qualification, profilePic }) => {
    return (
        <div className='transition-all-300 flex-container card-container'>
            <article className='flex-container flex-column inner-container'>

                <div className='flex-container flex-column avatar-container'>
                    <div className='avatar-backwall'>

                    </div>
                    <img
                        src={profilePic}
                        alt='profile pic'
                        title={name}
                        className='avatar-img'
                    />
                </div>

                <div className='doctor-info-container'>
                    <span className='doctor-name'>{name}</span>
                    <span className='doctor-speciality'>{speciality}</span>
                    <span className='doctor-experience'>{experience} years of experience</span>
                    <span className='doctor-qualifications'>Qualifications: {qualification}</span>
                </div>

                <div className='appointment-btn'>
                    <span>Book Appointment</span>
                </div>

            </article>
        </div>
    )
}

export default DoctorCard