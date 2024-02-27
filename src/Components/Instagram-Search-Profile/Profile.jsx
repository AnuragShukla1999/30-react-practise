import React from 'react';

function UserProfile({ data }) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>ID: {data.id}</p>
      <p>Username: {data.username}</p>
      {/* Add more user information as needed */}
    </div>
  );
}

export default UserProfile;