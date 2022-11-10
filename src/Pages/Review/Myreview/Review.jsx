import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ review, handleToDeleteComment }) => {
    const { serviceName, image_url, massage, _id } = review;

    return (
        <div className='w-full flex md:flex-row flex-col justify-between border border-blue-700 rounded-xl bg-blue-200'>
            <div className="avatar">
                <div className="sm:w-24 md:w-24 lg:w-24 w-60 mx-auto py-5 sm:py-0 md:py-0 lg:py-0 rounded-xl">
                    <img className='rounded-lg' src={image_url} alt="" />
                </div>
            </div>
            <div className='p-5'>
                <h2 className='text-center sm:text-2xl font-bold text-purple-500'>Service Name:- {serviceName}</h2>
                <p className='text-xl text-center text-pink-500'>{massage}</p>
            </div>
            <div className='flex justify-center py-5 items-center'>
                <Link className='btn btn-primary mr-5' to={`/updateReview/${_id}`}>Update</Link>
                <button onClick={() => handleToDeleteComment(_id)} className='btn btn-outline bg-orange-400 mr-5'>X</button>
            </div>
        </div>
    );
};

export default Review;