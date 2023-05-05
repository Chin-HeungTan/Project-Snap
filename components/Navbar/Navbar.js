import React, { useEffect, useState } from 'react'
import './Navbar.css'
import '../../App.css'
import { NavLink, Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import {useDispatch} from 'react-redux';
import {logout} from '../../actions/login'


export default function Navbar() {
    const dispatch = useDispatch();
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const loggingOut = async () => {
        await dispatch(logout());
        window.location.reload();
    }

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(false);
        }
    };

    return (
        <nav className="navbar">
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                SNAP
                <i class="fas fa-chart-line" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/upload' className='nav-links' onClick={closeMobileMenu}>
                        Upload
                    </Link>
                </li>

                <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to='/graphs' className='nav-links' onClick={closeMobileMenu}>
                        Graphs <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>

                <li className='nav-item'>
                    <Link to='/predictions' className='nav-links' onClick={closeMobileMenu}>
                        Predictions
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>

                {
                    localStorage.getItem('token') ?
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={loggingOut}>
                            Log out
                        </Link>
                    </li>
                    :
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>
                            Login
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    )
}
