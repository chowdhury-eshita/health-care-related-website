import React, { useState, useEffect } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('Experts.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className="container my-5">
            <h2 className="pt-5">Our Experts</h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }

            </div>
        </div>
    );
};

export default Doctors;