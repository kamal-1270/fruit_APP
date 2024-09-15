import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'
import trans from '../images/translator-logo.png';
const HomePage = () => {
  return (
    <>
    <div className="homepage-container" style={{backgroundColor:"skyblue"}}>
    <h1 style={{color:"white"}}>Fruit.Ai</h1>
    <p className="p1">"Be Healthy!"</p>
      <div className="services">
        <Link className="service-card" to="/chat" style={{backgroundColor:"palegreen"}}><h1>Chat.</h1></Link>
        <Link className="service-card" to="#" style={{backgroundColor:"royalblue",color:"royalblue"}}><h1>Blank</h1></Link>
        <Link className="service-card" to="#"style={{backgroundColor:"rosybrown",color:"rosybrown"}}><h1>Blank.</h1></Link>
        <Link className="service-card" to="/translator" style={{backgroundColor:"white"}}><img src={trans} style={{height:"100px",width:"100px",marginLeft:"8px"}}></img></Link>
        <Link className="service-card" to="/faq" style={{backgroundColor:"violet"}}><h1>FAQs</h1></Link>
        <Link className="service-card" to="/about" style={{backgroundColor:"darkcyan"}}><h1>About</h1></Link>

      </div>
      <h1 style={{color:"white"}}>......</h1>
    </div>
    </>
  );
};

export default HomePage;
