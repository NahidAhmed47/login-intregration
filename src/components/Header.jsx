import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full'>
            <nav className='w-1/2 flex justify-center mx-auto gap-10 text-base font-bold py-5 border-b'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/registration'>Registration</NavLink>
            </nav>
        </div>
    );
};

export default Header;