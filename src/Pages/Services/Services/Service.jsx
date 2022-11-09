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
                    <p>{details.slice(0, 100)}....</p>
                    <div className="card-actions my-5">
                        <Link className="btn btn-primary w-full" to={`/service/${_id}`}>
                            Service Details Page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;