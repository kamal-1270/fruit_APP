import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  

const Setup = () => {  
    const [name, setName] = useState('');  
    const navigate = useNavigate();  

    const handleNext = () => {  
        if (name) {  
            navigate('/chat');  
        }  
    };  

    return (  
        <div className="setup">  
            <h1>Setup Your Profile</h1>  
            <input  
                type="text"  
                placeholder="Enter your name"  
                value={name}  
                onChange={(e) => setName(e.target.value)}  
            />  
            <button onClick={handleNext}>Next</button>  
        </div>  
    );  
};  

export default Setup;



