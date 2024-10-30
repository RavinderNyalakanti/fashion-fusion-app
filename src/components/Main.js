/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Navbar from '../components/Navbar';

const Main = () => {
    const url = window.location.href;
    const showNavbar = !url.includes('login') && !url.includes('register');

    return (
        <div> 
            {showNavbar && <Navbar/>}
        </div>
    );
};


export default Main;