import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';

const Home = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <h1>This is home</h1>
            <p>Current Home Owner : { user ? user.displayName : 'Tor Bap'}</p>
        </div>
    );
};

export default Home;