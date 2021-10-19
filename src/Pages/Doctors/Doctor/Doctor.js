import React from 'react';
import './Doctor.css';
const Doctor = ({ doctor }) => {
    const { name, expertize, img } = doctor;
    return (
        <div className="container col-md-6 col-sm-12 mb-3 p-3">
            <div className="card text-center">
                <img className="image-size" src={img} alt="" />
                <h4>Name: {name}</h4>
                <h2>{expertize}</h2>
                <button className="btn btn-success">Get Appoinment</button>
            </div>
        </div>

    );
};

export default Doctor;