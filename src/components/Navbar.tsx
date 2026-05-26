import { NavLink } from 'react-router-dom';
//import { useTheme } from '../hooks/useTheme';
import './Navbar.css';
//import React from 'react';
// 1. Nhập ảnh trực tiếp
import myImage from '../assets/Leo-Victor(new).png';

function Navbar() {
    //const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {/* 2. Sử dụng ảnh trong thẻ img */}
                <img src={myImage} alt="Mô tả ảnh" /></div>
            <ul className="navbar-menu">
                <li>
                    <NavLink
                        to="/calculator"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Tính toán
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
