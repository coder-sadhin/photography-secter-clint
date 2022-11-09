import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ review }) => {
    const { serviceName, image_url, massage, _id } = review;

    return (
        <div className='flex justify-between border border-blue-700 rounded-xl bg-blue-200'>
            <div className="avatar">
                <div className="w-24 rounded-xl">
                    <img src={image_url} alt="" />
                </div>
            </div>
            <div className='p-5'>
                <h2 className='text-2xl font-bold text-purple-500'>Service Name:- {serviceName}</h2>
                <p className='text-xl text-pink-500'>{massage}</p>
            </div>
            <div className='flex items-center'>
                <Link className='btn btn-primary mr-5' to={`/updateReview/${_id}`}>Update</Link>
            </div>


        </div>
    );
};

export default Review;