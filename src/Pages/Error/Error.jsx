import React from 'react';

import Lottie from "lottie-react";
import animationData from './error-page.json'
import Nav from '../../Components/Nav/Nav';
import { Link } from 'react-router-dom';

const Error = () => {

    return (
        <div >
            <Nav/>
            <div className='flex flex-col justify-center items-center min-h-[clc(100vh-68px)]'>
                <Lottie className='h-[80vh]' animationData={animationData}></Lottie>
                <Link to={"/"}>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;