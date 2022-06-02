import { NavLink, Outlet } from 'react-router-dom';
import './AppBar.css';

const AppBar = () => {
    return (
        <>
            <nav className="container_nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => (!isActive ? 'link' : 'activeLink')}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/films"
                    className={({ isActive }) => (!isActive ? 'link' : 'activeLink')}
                >
                    Films
                </NavLink>
            </nav>
            <Outlet />
        </>
    );
};

export default AppBar;