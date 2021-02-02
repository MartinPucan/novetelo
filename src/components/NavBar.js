import React from "react";

function NavBar() {
    return (
        <nav className="navbar">
            <h3>Novetelo.cz</h3>
            <div className="navbar--menu">
                <div className="navbar--menu-item">Contacts</div>
                <div className="navbar--menu-item">Links</div>
                <div className="navbar--menu-item">Forum</div>
            </div>
        </nav>
    );
}

export default NavBar;
