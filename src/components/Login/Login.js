import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase.init';
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const handlegoogleSingIn = () => {
        signInWithGoogle()
            .then(() => {
            navigate(from, { replace: true });
        })
    }
    return (
      <div>
        <h1>Please login</h1>
        <div>
          <button onClick={handlegoogleSingIn}>Google Sign In</button>
        </div>{" "}
        <br />
        <form action="">
          <input type="email" placeholder="Your Email" />
          <br />
          <input type="password" placeholder="Your Password" name="" />
          <br /> <br />
          <input type="button" value="Login" />
        </form>
      </div>
    );
};

export default Login;