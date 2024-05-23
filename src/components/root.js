import React from 'react';
import Nav from './nav';
import { Outlet } from 'react-router-dom/dist';
import Footer from './footer';

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

