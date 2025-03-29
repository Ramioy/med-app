import React, { useState } from 'react'
import '../AppointmentForm/AppointmentForm.css'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('')
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber, appointmentDate, timeSlot });
        setName('');
        setPhoneNumber('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form flex-container flex-column">
            <div className="flex-container flex-row">
                <label className='labelform' htmlFor="name">Name:</label>
                <input
                    className='inputform'
                    type="text"
                    placeholder='Type your name'
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="flex-container flex-row">
                <label className='labelform' htmlFor="phoneNumber">Phone Number:</label>
                <input
                    className='inputform'
                    type="tel"
                    placeholder='Type your phone number'
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>
            <div className="flex-container flex-row">
                <label className='labelform' htmlFor="appointmentDate">Date of Appointment:</label>
                <input
                    className='inputform'
                    type="date"
                    id="appointmentDate"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    required
                />
            </div>
            <div className="flex-container flex-row">
                <label className='labelform' htmlFor="selectSlot">Book Time Slot:</label>
                <select
                    className='inputform'
                    id="selectSlot"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    required
                >
                    <option value="" selected>Select a time slot</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>

                </select>
            </div>
            <button className='btn-book' type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentForm