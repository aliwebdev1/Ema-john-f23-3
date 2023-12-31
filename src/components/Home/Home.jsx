import React from 'react';
import man from '../../assets/Images/man.png'
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto py-28">
            <div className=" flex justify-between items-center">
                <div>
                    <p className="py-6 text-yellow-500">Sale up to 70% off</p>

                    <h1 className="text-5xl font-bold">New Collection For Fall</h1>

                    <p className="py-6">Discover all the new arrivals of ready-to-wear collection.</p>

                    <Link to='/shop' className="btn btn-warning">SHOP NOW</Link>
                </div>


                <div className='img-box'>
                    <img src={man} className=" rounded-lg shadow-2xl" />
                </div>

            </div>
        </div>
    );
};

export default Home;