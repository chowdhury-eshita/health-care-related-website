import React from 'react';
import { useHistory } from 'react-router-dom';
import './Doctor.css';
const Doctor = ({ doctor }) => {
    const { name, expertize, img } = doctor;
    let history = useHistory();

    const handleClick = () => {
        history.push("/appoinments");
    }
    return (
        <div className="container col-md-6 col-sm-12 mb-3 p-3">
            <div className="card text-center">
                <img className="image-size" src={img} alt="" />
                <h4>Name: {name}</h4>
                <h2>{expertize}</h2>
                <button onClick={handleClick} className="btn btn-success">Get Appoinment</button>
            </div>
        </div>

    );
};

export default Doctor;