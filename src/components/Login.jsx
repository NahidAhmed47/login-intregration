import React from 'react';
import { Link } from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase.config';
import { toast } from 'react-hot-toast';

const Login = () => {
    const getFormInfo = (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
        .then(user =>{
            toast.success('Login successful!')
        })
        .catch(error=>{
            toast.error(`error: ${error.message}`)
        })
        event.target.reset()
    }
    return (
        <div className='w-1/5 mx-auto my-10'>
            <h1 className='text-lg font-bold font-serif text-center mb-3 text-violet-700'>LogIn please!</h1>
            <form onSubmit={getFormInfo} className='flex flex-col gap-3'>
                <input type="email" name="" id="email" className='input-field' placeholder='email' required/>
                <input type="password" name="" id="password" className='input-field' placeholder='password' required/>
                <button className='px-3 py-1 text-base font-semibold font-mono bg-violet-700 rounded-md text-white'>Submit</button>
            </form>
            <p className='text-sm font-mono font-medium my-2 text-center'>You have no account? <br></br>Please <Link to="/registration" className='underline text-blue-600'>Register</Link></p>
        </div>
    );
};

export default Login;