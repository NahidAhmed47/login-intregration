import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <div className='w-full flex justify-around text-base font-bold py-5 border-b'>
            <nav className=' flex justify-center  gap-10 '>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/registration'>Registration</NavLink>
                {user && <NavLink to='/profile'>Profile</NavLink>}
            </nav>
            {
                user ? <div className='flex gap-5'><h1>{user.email}</h1> <button onClick={logOut}>Sing out</button></div> : <div><Link to='/login'>Sing in</Link></div>
            }
        </div>
    );
};

export default Header;