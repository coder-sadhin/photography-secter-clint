import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className="hero min-h-screen mb-10 rounded-xl" style={{ backgroundImage: `url("https://iili.io/pG7xrQ.jpg")` }}>
                <div className="hero-overlay rounded-xl bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">WELCOME TO PHOTOGRAPHY WORLD</h1>
                        <p className="mb-5">You always welcome on my site. You have get setesfection on my work. scrole and show my provide service.</p>
                        <Link to={'/services'}><button className="btn btn-primary">GO SERVICE PAGE</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;