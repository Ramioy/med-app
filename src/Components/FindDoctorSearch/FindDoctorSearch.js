import React, { useState } from 'react';
import '../FindDoctorSearch/FindDoctorSearch.css'
import magnifier from '../FindDoctorSearch/magnifier.png'
import { useNavigate, Navigate } from 'react-router-dom';

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]

export const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
    }
    return (
        <div className='input-result'>
            <div className="search-container">
                <input
                    type='text'
                    placeholder="Search doctors, clinics, hospitals, etc."
                    onFocus={() => setDoctorResultHidden(false)}
                    onBlur={() => setDoctorResultHidden(true)}
                    value={searchDoctor}
                    onChange={(e) => setSearchDoctor(e.target.value)}
                />
                <img src={magnifier} alt="search-icon" title="click me" />
            </div>
            <br />
            <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                {
                    specialities.map(speciality =>
                        <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                            <span><img src={magnifier} alt="x" title='y' style={{ height: "15px", width: "15px", borderRadius: '50%' }} /></span>
                            <span>{speciality}</span>
                            <span>SPECIALITY</span>
                        </div>)
                }
            </div>
        </div>
    )
}

export default FindDoctorSearch