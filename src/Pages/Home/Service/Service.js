import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, testName, cost, description, img } = service;
    return (
        <div className="text-center my-3 col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <img src={img} alt="" />
                <h2>{testName}</h2>
                <h4>Cost: {cost}</h4>
                <p className="p-3">{description}</p>
                <Link to={`/servicedetails/${id}`}>
                    <button className="btn btn-warning">See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;