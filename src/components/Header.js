import logo from '../images/PurinaRUHeader_2.png';
import React from 'react';
export default function Header() {
    return (
        <header className="header">
            <a href="/#" className="header__link">
                <img className="header__logo" src={logo} alt="Logo" />
            </a>
        </header>
    );
}