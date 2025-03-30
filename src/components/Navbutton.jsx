import '../styles/Components.css';
// File: /components/NavButton.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from '../styles/Components.css';

function NavButton({ to, label }) {
    return (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
            >
                {label}
            </NavLink>
        </li>
    );
}

export default NavButton;