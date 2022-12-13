import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav>
      <ul>
        {/* {!user.name && ( */}
          <li>
            <Link to="/login">Login</Link>
          </li>
        {/* )} */}
        {/* {!user.name && ( */}
          <li>
            <Link to="/register">Register</Link>
          </li>
        {/* )} */}
        <li>
          <Link to="/galleries">Galleries</Link>
        </li>
      </ul>
    </nav>
  );
}