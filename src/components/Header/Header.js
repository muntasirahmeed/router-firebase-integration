import React from "react";
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth'
import { auth } from "../firebase.init";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={()=>signOut(auth)}>Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
