import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('Expert.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, [])
    return (
        <div className="container my-5">
            <h2>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
                <button className="btn btn-success mt-3">Make an Appoinment</button>
            </div>
        </div>
    );
};

export default Experts;