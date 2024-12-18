import React from 'react';
import { GrOverview } from 'react-icons/gr';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineInventory2, MdOutlineLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Sidebar = () => {
    const {logout} = UseAuth()
    return (
        <div className='px-6 py-12 bg-base-200 flex flex-col gap-2 border-r-2 border-black min-h-screen'>
            <div className='mb-12 py-2 border-b-2 border-b-black'>
                <h2 className="text-2xl font-bold text-red-500">Gadget Shop</h2>
            </div>
            <Link to='/dashboard/overview' className='flex items-center gap-2 px-4 py-2 rounded-md hover:bg-slate-500 bg-slate-800 text-white'><GrOverview /> Overview</Link>
            <Link to='/dashboard/my-product' className='flex items-center gap-2 px-4 py-2 rounded-md hover:bg-slate-500 bg-slate-800 text-white'><MdOutlineInventory2 /> My products</Link>
            <Link to='/dashboard/add-product' className='flex items-center gap-2 px-4 py-2 rounded-md hover:bg-slate-500 bg-slate-800 text-white'><IoMdAddCircleOutline />Add products</Link>
            <Link to='/' className='flex items-center gap-2 px-4 py-2 rounded-md hover:bg-slate-500 bg-slate-800 text-white'>
            <IoHomeOutline />
            Home</Link>
            <button onClick={()=>logout()} className='flex items-center gap-2 px-4 py-2 rounded-md hover:bg-slate-500 bg-slate-800 text-white'>
            <MdOutlineLogout />
            Logout</button>
        </div>
    );
};

export default Sidebar;