import React,{useState} from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
    const {click,setClick} = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='logo' >
                        TRVL <i className='fab fa-typo3'/>    
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-time' : 'fas fa-bars'} />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar