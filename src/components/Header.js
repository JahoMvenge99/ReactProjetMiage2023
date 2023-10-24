import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                        <li>
                            <NavLink to="/Home" className={nav => nav.isActive ? "nav-active": ""}>Acceuil</NavLink>
                            </li>
                    
                     <li><NavLink to="/Coups-de-coeur" className={nav => nav.isActive ? "nav-active": ""}>
                       Coup de coeur</NavLink>
                       </li>
                    { <li>
                    <NavLink to="/Contact" className={nav => nav.isActive ? "nav-active": ""}>
                        Contact </NavLink>
                        </li> }
                   
                </ul>
            </nav>
            <h1>FIND YOUR MOUVIE</h1>
        </div>
    );
};

export default Header;
