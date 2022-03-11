
import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
function Navbar(){
    const [count, setCount] = useState(false);
    const handleclick = ()=>setCount(!count);
    const closeMobileMenu = () => setCount(false);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    TRVL <i className='fab fa-typo3'/>
                </Link>

                <div className='menu-icon' onClick={handleclick}>
                    <i className={count ? 'fas fa-times':'fas fa-bars'}/>
                </div>
                <ul className={count ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Servicio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Productos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        
        </>
    );
}

export default Navbar