import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';

const Root = () => {
    return (
        <div>
            <Scroll></Scroll>
            <NavBar></NavBar>
          <div className='min-h-screen'>
              <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;