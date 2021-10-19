import React from 'react';
import './Expert.css';
const Expert = ({ expert }) => {
    const { name, expertize, img } = expert;
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card text-center">
                    <img className="" src={img} alt="" />
                    <h4>{name}</h4>
                    <h3>{expertize}</h3>
                </div>
            </div>
        </>
    );
};

export default Expert;