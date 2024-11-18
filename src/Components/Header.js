// Header.js
import React from 'react';
import './App.css';

function Header() {
    return (
        <header className="ui fixed menu">
            <nav className="ui container center aligned">
                <h1 className="ui header" style={{ margin: "0 auto", padding: "10px" }}>
                    Contact Manager
                </h1>
            </nav>
        </header>
    );
}

export default Header;
