import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';


const Products = () => {
const [user]=useAuthState(auth)
    return (
        <div>
            <h1>knock knock ! Who is there?</h1>
            <h4>{ user ? user.displayName: 'Vooot'}</h4>
        </div>
    );
};

export default Products;