

import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';


 function User({ user }) {
    const {
        avatar_url,
        followers,
        following,
        public_repos,
        name,
        login,
        created_at,
    } = user;


    const createdDate = new Date(created_at);

    return (
        <div className="user">
            <div>
                <img src={avatar_url} className="avatar" alt="User" />
            </div>

            <div className="name-container">
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>
                    User joined on{" "}
                    {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                        month: "short",
                    })} ${createdDate.getFullYear()}`}
                </p>
            </div>

            <div className="profile-info">
                <div>
                    <p>Public Repos</p>
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>{following}</p>
                </div>
            </div>


        </div>
    )
};




export default function GithubProfileFinder() {
    const [userName, setUserName] = useState("AnuragShukla1999");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        if (data) {
            setUserData(data);
            setLoading(false);
            setUserName("")
        }
    }

    function handleSubmit() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if (loading) {
        return <h1>Loading data ! Please wait</h1>;
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    name='search-by-username'
                    type="text"
                    placeholder='Search Github Username...'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>

            {userData !== null ? <User user={userData} /> : null}
        </div>
    )
}