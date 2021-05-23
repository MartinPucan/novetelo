import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3>Novetelo.cz</h3>
            <div className="navbar--menu">
                <div className="navbar--menu-item">
                    <a href="#">Contacts</a>
                </div>
                <div className="navbar--menu-item">
                    <a href="#">Links</a>
                </div>
                <div className="navbar--menu-item">
                    <a href="#">Forum</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
