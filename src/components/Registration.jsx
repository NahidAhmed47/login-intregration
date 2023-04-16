import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../firebase.config';
import toast from 'react-hot-toast';
const Registration = () => {
    const [error, setError] = useState('');
    const getFormInfo = (event)=>{
        setError('')
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const auth = getAuth(app);
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please enter at least 2 uppercase!');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(user =>{
            toast.success('Registration successful!')
        })
        .catch(error => {
            toast.error(`error: ${error.message}`)
        })
        event.target.reset()
    }
    return (
        <div className='w-1/5 mx-auto my-10'>
            <h1 className='text-lg font-bold font-serif text-center mb-3 text-violet-700'>Registration please!</h1>
            <form onSubmit={getFormInfo} className='flex flex-col gap-3'>
                <input type="text" name="" id="name" className='input-field' placeholder='your name'/>
                <input type="email" name="" id="email" className='input-field' placeholder='email'/>
                <input type="password" name="" id="password" className='input-field' placeholder='password'/>
                <button className='px-3 py-1 text-base font-semibold font-mono bg-violet-700 rounded-md text-white'>Submit</button>
            </form>
            <p className='text-sm font-mono font-medium my-2 text-center'>You have an account? <br></br>Please <Link to="/login" className='underline text-blue-600'>Login</Link></p>
            <p className='text-red-500'>{error}</p>
        </div>
    );
};

export default Registration;