import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='w-1/2 mx-auto flex gap-10 text-base font-bold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/registration'>Registration</NavLink>
            </nav>
        </div>
    );
};

export default Header;