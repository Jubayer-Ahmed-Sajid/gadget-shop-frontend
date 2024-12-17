import React from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex lg:grid grid-cols-12'>
           <div className='col-span-2'>
            <Sidebar></Sidebar>
           </div>
           <div className='col-span-10'>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;