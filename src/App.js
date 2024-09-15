import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import HomePage from './pages/HomePage.js';
import ChatPage from './pages/chatPage.js';
import TranslatorPage from './pages/TranslatorPage.js';
import FAQPage from './pages/FAQPage.js';
import AboutPage from './pages/AboutPage.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/translator" element={<TranslatorPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
