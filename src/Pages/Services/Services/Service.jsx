import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { image_url, price, title, details, _id } = service;
    console.log(service)
    return (
        <div className='mx-auto'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image_url} className='w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl text-green-600">{title}</h2>
                    <h2 className="card-title font-bold">Price: ${price}</h2>
                    <p>{details}</p>
                    <div className="card-actions my-5">
                        <Link to={`/service/${_id}`}>
                            <button className="btn btn-primary w-full">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;