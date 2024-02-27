import React, { useState } from 'react';
import axios from 'axios';
import UserProfile from './Profile';

function Instagram() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://graph.instagram.com/v12.0/me?fields=id,username&access_token=${YOUR_ACCESS_TOKEN}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  return (
    <div className="App">
      <h1>Instagram Search Profile</h1>
      <div className="search-profile">
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {userData && <UserProfile data={userData} />}
    </div>
  );
}

export default Instagram;