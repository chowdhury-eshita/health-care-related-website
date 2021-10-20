import React from 'react';

const Appoinments = () => {
    return (
        <>
            <h1 className="mt-5 text-center text-light bg-primary">Contact Us</h1>
            <div className="d-flex align-items-center justify-content-center">
                <div className="bg-light w-25 text-center">
                    <h3 className="text-primary">Acme Health Care</h3>
                    <p>Khada road, b-block Dhaka</p>
                    <p className="text-success">Call: 304032</p>
                    <p className="text-success">Mail: acme@gmail.com</p>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFLUFiXdtyP46WI2WnsIZAGAw0owCZGUY-xg&usqp=CAU" alt="" />
            </div>
        </>
    );
};

export default Appoinments;