import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                 <Outlet></Outlet>
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;