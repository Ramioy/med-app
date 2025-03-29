import React, { useState } from 'react';
import surgeon from '../FindDoctorSearch/surgeon.png'
import '../FindDoctorSearch/FindDoctorSearch.css';
import InputSearch from '../FindDoctorSearch/InputSearch/InputSearch';


const FindDoctorSearchIC = () => {
    return (
        <div>
            <section className='search-top'>
                <h1>Find the right doctor for you</h1>
                <figure>
                    <img src={surgeon} alt="surgeon picture" title="search a doctor" />
                </figure>
                <InputSearch />
            </section>
        </div>
    )
}

export default FindDoctorSearchIC