import React, { useEffect, useState } from 'react';
import './InstantConsultation.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FindDoctorSearchIC from './FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCard from '../../Components/DoctorCard/DoctorCard'

const InstantConsultation = () => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const getDoctorsDetails = () => {
        fetch('/doctor-db/db.json')
            .then(res => res.json())
            .then(data => {
                if (searchParams.get('speciality')) {
                    // window.reload()
                    const filtered = data.filter(doctor => doctor.speciality.toLowerCase() === searchParams.get('speciality').toLowerCase());

                    setFilteredDoctors(filtered);

                    setIsSearched(true);
                    window.reload()
                } else {
                    setFilteredDoctors([]);
                    setIsSearched(false);
                }
                setDoctors(data);
            })
            .catch(err => console.log(err));
    }
    const handleSearch = (searchText) => {

        if (searchText === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
        } else {

            const filtered = doctors.filter(
                (doctor) =>
                    // 
                    doctor.speciality.toLowerCase().includes(searchText.toLowerCase())

            );

            setFilteredDoctors(filtered);
            setIsSearched(true);
            window.location.reload()
        }
    };
    const navigate = useNavigate();
    useEffect(() => {
        getDoctorsDetails();
        // const authtoken = sessionStorage.getItem("auth-token");
        // if (!authtoken) {
        //     navigate("/login");
        // }
    }, [searchParams])

    return (
        <center>
            <div className="searchpage-container">
                <FindDoctorSearchIC onSearch={handleSearch} />
                <div className="search-results-container">
                    {isSearched ? (
                        <center>
                            <h2>This {filteredDoctors.length} doctors can help you! {searchParams.get('location')}</h2>
                            <h3>Make an appointment now with no up front charge</h3>
                            <div className='w-fit'>
                                {filteredDoctors.length > 0 ? (
                                    filteredDoctors.map(doctor => <DoctorCard {...doctor} key={doctor.name} />)
                                ) : (
                                    <p>No doctors found.</p>
                                )}
                            </div>
                        </center>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </center>
    )
}

export default InstantConsultation