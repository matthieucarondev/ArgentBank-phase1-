import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer';
import Nav from './components/nav';
import Login from './pages/login';
import Erreur404 from './pages/error';
import Profile from './pages/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <article className="html">
      <body>
      {/* Navigation */}
        <Nav/>
      {/* Main content */}
      <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path='/Sign-In' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path="*" element={<Erreur404 />} />
      </Routes>
      {/* Footer */}
      <Footer/>
      </body>
    </article>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
