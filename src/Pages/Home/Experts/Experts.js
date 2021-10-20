import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    let history = useHistory();

    const handleClick = () => {
        history.push("/appoinments");
    }

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
                <button onClick={handleClick} className="btn btn-success mt-3">Make an Appoinment</button>
            </div>
        </div>
    );
};

export default Experts;