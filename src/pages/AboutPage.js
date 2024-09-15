// src/components/AboutPage.js
import React from 'react';
import './AboutPage1.css'; // Import CSS file for styling

const AboutPage = () => {
  return (
    <div className="aboutpage-container">
      <h1 className='h1' style={{color:"black"}}>Fruit.Ai</h1>
      <div className='containerAbout'>
        <p>Whether you're looking to discover new fruits,
           understand their nutritional values, or find the
            perfect fruit for your diet, our Al-driven chatbot is
             here to assist. We provide personalized fruit
              recommendations tailored to your health needs,
             making it easier for you to integrate the best
              fruits into your daily routine.</p>
              
      </div><button className='btn1'>About</button>

    </div>
  );
};

export default AboutPage;
