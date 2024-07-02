import React from 'react';
import './Address.css';

const Address = ({ street, city, state, zip }) => {
    return (
        <div className="address">
            <p>{street}</p>
            <p>{city}, {state} {zip}</p>
        </div>
    );
};

export default Address;