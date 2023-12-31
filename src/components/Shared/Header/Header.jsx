import React from 'react';
import logo from '../../../assets/Images/Logo.png'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-[#1C2B35] fixed z-10	">
            <div className="container mx-auto">
                <div className="flex-1">
                    <Link to="/" className=" text-xl text-white">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/about' className='text-white'>About</NavLink></li>
                        <li><NavLink to='/shop' className='text-white'>Shop</NavLink></li>
                        <li><a className='text-white'>Order</a></li>
                        <li><a className='text-white'>Order Review</a></li>
                        <li><a className='text-white'>Manage Inventory</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;