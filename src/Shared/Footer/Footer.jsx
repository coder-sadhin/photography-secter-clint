import React from 'react';
import logo from '../../asset/logo.png';
import { FaFacebookSquare, FaTwitterSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gray-900 w-full'>
            <div className='w-11/12 mx-auto'>
                <footer className="footer items-center p-4 bg-gray-900 text-white">
                    <div>
                        <p>PHOTOGRAPHY WORLD.<br />Providing Service since 2017</p>
                    </div>
                    <div className="items-center grid-flow-col">
                        <img className='w-10 text-white' src={logo} alt="" />
                        <p>Copyright © 2022 - All right reserved</p>
                    </div>
                    <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <FaFacebookSquare className='text-3xl' />
                        <FaYoutube className='text-3xl' />
                        <FaTwitterSquare className='text-3xl' />
                    </div>
                </footer>
            </div>

        </div>
    );
};

export default Footer;