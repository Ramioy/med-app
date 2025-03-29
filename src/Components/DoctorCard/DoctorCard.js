import React, { useEffect, useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm ';
import Popup from 'reactjs-popup';
import { v4 as uuidv4 } from 'uuid';
import '../DoctorCard/DoctorCard.css'

const DoctorCard = ({ name, speciality, experience, qualification, profilePic }) => {

    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([]);

    const handleBooking = () => {
        setShowModal(true);
    };

    const handleCancel = (appointmentId) => {
        const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
        setAppointments(updatedAppointments);
    };

    const handleFormSubmit = (appointmentData) => {
        const newAppointment = {
            id: uuidv4(),
            ...appointmentData,
        };
        const updatedAppointments = [...appointments, newAppointment];
        setAppointments(updatedAppointments);
        setShowModal(false);
    };

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

                <Popup
                    style={{ backgroundColor: '#FFFFFF' }}
                    trigger={
                        <div className={`${appointments.length > 0 ? 'appointment-btn-cancel' : 'appointment-btn'}`}>
                            {appointments.length > 0 ? <span> Cancel Appointment </span> : <span> Book Appointment </span>}
                        </div>
                    }
                    modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                >

                    {(close) => (
                        <div className="flex-container flex-column doctorbg transition-all-300">
                            <div className='flex-container flex-column'>

                                <div className='flex-container flex-column' style={{ position: 'relative', width: '200px', height: '200px' }}>
                                    <div className='backwall'>

                                    </div>
                                    <img
                                        src={profilePic}
                                        alt='profile pic'
                                        title={name}
                                        style={{ position: 'absolute', width: '200px' }}
                                    />
                                </div>

                                <div className="flex-container flex-column doctor-info">
                                    <div className="doctor-name">{name}</div>
                                    <div className="doctor-speciality">{speciality}</div>
                                    <div className="doctor-experience">{experience} years experience</div>
                                    <div className="doctor-qualifications">Qualifications: {qualification}</div>
                                </div>
                            </div>

                            {appointments.length > 0 ? (
                                <>
                                    <h3 style={{ textAlign: 'center' }}>Appointment Booked!</h3>
                                    {appointments.map((appointment) => (
                                        <div className="bookedInfo" key={appointment.id}>
                                            <p>Name: {appointment.name}</p>
                                            <p>Phone Number: {appointment.phoneNumber}</p>
                                            <button className='btn-cancel' onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
                            )}
                        </div>
                    )}

                </Popup>
            </article>
        </div>
    )
}

export default DoctorCard