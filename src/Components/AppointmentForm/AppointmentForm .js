import React, { useState } from 'react'
import '../AppointmentForm/AppointmentForm.css'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber });
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
            <button className='btn-book' type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentForm