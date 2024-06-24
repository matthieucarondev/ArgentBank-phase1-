import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom/dist';
import Footer from './Footer';

export default function Root() {
    return (
        <div className="html">
            <body>
                <Nav/>
                <Outlet/>
                <Footer/>
            </body>
        </div>
    )
}

