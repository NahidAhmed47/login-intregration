import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                 <Outlet></Outlet>
                 <Toaster></Toaster>
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;