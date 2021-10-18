import React from 'react';
import { Link } from "react-router-dom";
import routes from '../../routes';
import './Header.css'

const Header = () => (
    <header className="header">
        <nav className="nav">
            <ul>
                {routes.map(route => !!route.name && (
                    <li key={route.path}>
                        <Link to={route.path}>
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
)

export default Header;