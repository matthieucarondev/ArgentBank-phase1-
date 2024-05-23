import React from 'react';
import './index.css';
import Root from './components/root';
import Home from './pages/Home';
import Profile from './pages/profile';
import Erreur404 from './pages/error';
import Login from './pages/login';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
             <Route path="/" element={<Root />}>
                    <Route index element={<Home />} />
                    <Route path="/Sign-In" element={<Login />} />
                    <Route token path="/profile" element={<Profile />} />
                    <Route path="*" element={<Erreur404 />} />

                </Route>
        )
    )
    return (
        <RouterProvider router={router} />
     
    );
}

export default App