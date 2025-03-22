import React, { useState } from 'react';
import surgeon from '../FindDoctorSearchIC/surgeon.png'
import '../FindDoctorSearchIC/FindDoctorSearchIC.css';
import FindDoctorSearch from '../../FindDoctorSearch/FindDoctorSearch';

const FindDoctorSearchIC = () => {
    return (
        <div>
            <section className='search-top'>
                <h1>Find the right doctor for you</h1>
                <figure>
                    <img src={surgeon} alt="surgeon picture" title="search a doctor"/>
                </figure>
                <FindDoctorSearch/>
            </section>
        </div>
    )
}

export default FindDoctorSearchIC