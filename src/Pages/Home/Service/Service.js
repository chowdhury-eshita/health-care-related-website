import React from 'react';

const Service = ({ service }) => {
    const { id, testName, cost, description, img } = service;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <img src={img} alt="" />
            <h2>{testName}</h2>
            <h3>{cost}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;