import React, {Component} from 'react';
import logo from '../../logo.svg'
import './Navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt=""/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">home</a>
                </li>
                <li>
                    <a href="/" className="nav-link">about</a>
                </li>
                <li>
                    <a href="/" className="nav-link active">tours</a>
                </li>
            </ul>
        </div>
    )
}