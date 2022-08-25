// Сюда происходит импорт ссылок из компонента Links
import logo from '../images/PurinaRUHeader_2.png';
import React from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
export default function Header() {
    return (
        <header className="header">
            <Link to='/' className="header__link">
                <img className="header__logo" src={logo} alt="Logo" />
            </Link>
            <Links 
            
            />
        </header>
    );
}