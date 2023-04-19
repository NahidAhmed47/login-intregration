import React, { useContext } from 'react';
import { AuthContext } from '../providers/UserContext';

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div className='font-semibold text-center mt-10 text-xl'>
            This is home page! {user.displayName}
        </div>
    );
};

export default Home;