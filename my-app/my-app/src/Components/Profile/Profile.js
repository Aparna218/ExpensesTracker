import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/profile', { headers: { Authorization: token } });
                setUser(response.data);
            } catch (error) {
                console.error(error.response.data); // Handle error
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {user && (
                <>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    {/* Display additional user details */}
                </>
            )}
        </div>
    );
};

export default ProfilePage;
