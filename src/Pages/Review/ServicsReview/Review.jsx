import React from 'react';
import { FaMeh } from 'react-icons/fa';

const Review = ({ index, review }) => {
    console.log(review)
    const { name, massage, photoURL } = review;
    return (
        <div className='flex border border-blue-700 rounded-xl bg-blue-200 p-5'>
            <div className="avatar">
                <div className="w-24 rounded-xl">
                    {
                        photoURL ? <img src={photoURL} alt="" /> : <FaMeh className='text-7xl' />
                    }
                </div>
            </div>
            <div className='px-5'>
                <h2 className='text-2xl font-bold text-purple-500'>{name}</h2>
                <p className='text-xl text-pink-500'>{massage}</p>
            </div>
        </div>
    );
};

export default Review;