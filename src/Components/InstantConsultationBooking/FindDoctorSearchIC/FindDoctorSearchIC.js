import React, { useState } from 'react';
import surgeon from '../FindDoctorSearchIC/surgeon.png'
import magnifier from '../FindDoctorSearchIC/magnifier.png'
import '../FindDoctorSearchIC/FindDoctorSearchIC.css';
import { useNavigate, Navigate } from 'react-router-dom';


const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]

const FindDoctorSearchIC = () => {
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
        <div>
            <section className='search-top'>
                <h1>Find the right doctor for you</h1>
                <figure>
                    <img src={surgeon} alt="surgeon picture" title="search a doctor"/>
                </figure>
                <div className="search-container">
                    <input 
                        type='text' 
                        placeholder="Search doctors, clinics, hospitals, etc." 
                        onFocus={() => setDoctorResultHidden(false)} 
                        onBlur={() => setDoctorResultHidden(true)} 
                        value={searchDoctor} 
                        onChange={(e) => setSearchDoctor(e.target.value)}
                    />
                    <img src={magnifier} alt="search-icon" title="click me"/>
                </div>
                <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {
                                specialities.map(speciality => <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                    <span><img src={magnifier} alt="x" title='y' style={{height:"10px", width:"10px"}} width="12" /></span>
                                    <span>{speciality}</span>
                                    <span>SPECIALITY</span>
                                </div>)
                            }
                </div>
            </section>
        </div>
    )
}

export default FindDoctorSearchIC