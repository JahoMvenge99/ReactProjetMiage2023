import { default as React } from 'react';
import { NavLink } from 'react-router-dom';
import { getFavouritesRoute } from '../routing/getFavouritesRoute';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                        <li>
                            <NavLink to="/Home" className={nav => nav.isActive ? "nav-active": ""}>Acceuil</NavLink>
                            </li>
                    
                     <li><NavLink to={getFavouritesRoute()} className={nav => nav.isActive ? "nav-active": ""}>
                       Coup de coeur</NavLink>
                       </li>
                    { <li>
                    <NavLink to="/Contact" className={nav => nav.isActive ? "nav-active": ""}>
                        Contact </NavLink>
                        </li> }
                   
                </ul>
            </nav>
            <h1>Trouver votre Film</h1>
        </div>
    );
};

export { Header };
