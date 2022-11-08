import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo2.png';

const Header = ({ user }) => {
    const menuItems = <>
        <li className='font-semibold'><Link to={'/'}>Home</Link></li>
        <li className='font-semibold'><Link to={'/services'}>Services</Link></li>
        <li className='font-semibold'><Link to={'/addService'}>Add Service</Link></li>
        <li className='font-semibold'><Link to={'/blogs'}>Blogs</Link></li>
        <li className='font-semibold'><Link to={'/myReview'}>My Review</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to={'/Orders'}>Orders</Link></li>
                    <li className='font-semibold'><button className='btn-ghost'>Sign Out</button></li>
                </>
                :
                <>
                    <li className='font-semibold'><Link to={'/login'}>Login</Link></li>
                    <li className='font-semibold'><Link to={'/register'}>Register</Link></li>
                </>
        }
    </>
    return (
        <div className='bg-blue-200'>
            <div className='max-w-screen-xl mx-auto '>
                <div className="navbar h-20 mb-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}


                            </ul>
                        </div>
                        <Link className="btn btn-ghost text-xl" to={'/'}>
                            <img className='w-16' src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">

                            {menuItems}

                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-outline btn-warning">Appointment</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;