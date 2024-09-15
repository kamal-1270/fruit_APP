import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import facbook from '../../images/facebookIcon.png';
import instragram from '../../images/instragramIcon.jpg';
import linkedin from '../../images/linkedinIcon.png';
import fingerPrint from '../../images/fingerprintIcon.png';
import home from "../HomePage";
const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials
    const dummyUserId = 'user123@gmail.com';
    const dummyPassword = '123';

    if (userId === dummyUserId && password === dummyPassword) {
      navigate('/homepage');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
    <div className='container1'>
      <form onSubmit={handleLogin}>
        <strong style={{marginLeft:"120px",color:"red",fontSize:"30px"}}>Fruit.Ai</strong><hr></hr>
      <h2>Login</h2>
      <p className='p2'>By signing in you are agreering<br></br>Our <span>Term and privacy policy</span></p>
      <div className='container'>
      <Link className='link1' to="/">Login</Link>
      <Link className='link1' to="#">Register</Link>
      </div>
        <label className='l1'>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder='📩 Email Address'
            required
          />
        </label>
        <label className='l1'>
          <input
            // type="password"
            className='passwordInput'
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='🔒 password'   
            required 
            
          />
          <i 
            className={`fas fa-eye${showPassword ? '-slash' : ''}`} 
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </label>
        <div className='div2'>
        <label className='checkbox1'>
        <input type='checkbox'></input>
        &nbsp;Remember password 
        </label>
         <span className='forgetPass' style={{marginLeft:'60px'}}>Forget password</span>
         </div>
        <button type="submit" className='btn'>
          <Link src={home} style={{textDecoration:"none"}}>Login</Link>
        </button>
        <p>or connect with</p>

        <div className='divIcon'>
       <center><img src={facbook} className='img1'></img>
        <img src={instragram} className='img2'></img>
        <img src={linkedin} className='img3'></img></center> 
        </div>

        <img src={fingerPrint} className='finger1'></img>
      </form>
    </div>
    </>
  );
};

export default Login;
