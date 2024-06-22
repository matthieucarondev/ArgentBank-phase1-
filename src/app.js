import React, { useEffect } from 'react';
import './index.css';
import Root from './components/root';
import Home from './pages/home';
import Profile from './pages/profile';
import Erreur404 from './pages/error';
import Login from './pages/login';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { rehydrateToken } from './actions/authAction';
import ProtectedRoute from './components/protectedRoute';

function App() {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rehydrateToken());
  }, [dispatch]);

    const router = createBrowserRouter(
        createRoutesFromElements(
             <Route path="/" element={<Root />}>
                    <Route index element={<Home />} />
                    <Route path="/Sign-In" element={<Login />} />
                    <Route token  path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="*" element={<Erreur404 />} />

                </Route>
        )
    )
    return (
        <RouterProvider router={router} />
     
    );
}

export default App