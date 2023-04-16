import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='w-1/5 mx-auto my-10'>
            <h1 className='text-lg font-bold font-serif text-center mb-3 text-violet-700'>Registration please!</h1>
            <form className='flex flex-col gap-3'>
                <input type="text" name="" id="" className='input-field' placeholder='your name'/>
                <input type="email" name="" id="" className='input-field' placeholder='email'/>
                <input type="password" name="" id="" className='input-field' placeholder='password'/>
                <button className='px-3 py-1 text-base font-semibold font-mono bg-violet-700 rounded-md text-white'>Submit</button>
            </form>
            <p className='text-sm font-mono font-medium my-2 text-center'>You have an account? <br></br>Please <Link to="/login" className='underline text-blue-600'>Login</Link></p>
        </div>
    );
};

export default Registration;