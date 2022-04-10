import React from "react";
import './styles/navbar.css';

const Navbar= () => {
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="navbar-title">
                    <h1>NGO_Finder</h1>
                </div>
                <div className="navbar_links">
                    <h2 className="navbar_link">About</h2>
                    <h2 className="navbar_link">Form</h2>
                    <h2 className="navbar_link">NGO-Lists</h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;