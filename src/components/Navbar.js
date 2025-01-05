import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* Blog Logo/Brand */}
                <NavLink className="navbar-brand" to="/">Blog</NavLink>

                {/* Toggler for Mobile View */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/create">New Post</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/BlogForm">Form</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/BlogList">List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/BlogPost">Post</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
