import React from 'react';
import Address from './Address';
import './UserProfile.css';

const UserProfile = ({ name, email, address }) => {
    return (
        <div className="user-profile">
            <h2>{name}</h2>
            <p>{email}</p>
            <Address
                street={address.street}
                city={address.city}
                state={address.state}
                zip={address.zip}
            />
        </div>
    );
};

export default UserProfile;