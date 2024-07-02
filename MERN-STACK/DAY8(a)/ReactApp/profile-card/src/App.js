import React from 'react';
import UserProfile from './components/UserProfile';

const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Newtown',
    state: 'CA',
    zip: '12345'
  }
};

const App = () => {
  return (
    <div className="app">
      <h1 align="center">User Profile</h1>
      <UserProfile
        name={user.name}
        email={user.email}
        address={user.address}
      />
    </div>
  );
};

export default App;