import React from 'react';  
import { Link, useNavigate } from 'react-router-dom';  
import Setup from './Setup.js';
const SplashScreen = () => {  
    const navigate = useNavigate();  

    const handleStart = () => {  
        navigate('/Setup');  
    };  

    return (  
        <div className="splash-screen">  
            <h1>Welcome to Chat App</h1>  
            <button onClick={handleStart}><Link src={Setup}>Get Started</Link></button>  
        </div>  
    );  
};  

export default SplashScreen;
