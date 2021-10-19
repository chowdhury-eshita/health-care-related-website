import React from 'react';
import { useHistory } from 'react-router-dom';
import health1 from '../../../../images/Health/health-1.jpg';
const Health = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/helathDetails");
    }
    return (
        <div className="container d-flex my-5">
            <img src={health1} alt="" />
            <div className="ms-5">
                <h1>Know Your Health Status</h1>
                <p>Living and learning in a different country and environment places additional demands on your mind and body. The emotional effects of adjusting to a new environment and culture can sometimes lead to confusion, anxiety, and discouragement. As a result, you may experience mood shifts that can be stressful. Be sure to take proper care of yourself with the same rest, relaxation, and activities that typically work for you at home, such as reading or exercising and keeping to a regular sleep schedule, to help you best adjust to your new surroundings abroad.</p>
                <button onClick={handleClick} className="btn btn-warning">Read More</button>
            </div>
        </div>
    );
};

export default Health;