import React from 'react';

const Review = ({ index, review }) => {
    console.log(review)
    const { name, massage } = review;
    return (
        <div className='flex border border-blue-700 rounded-xl bg-blue-200 p-5'>
            <div className="avatar">
                <div className="w-24 rounded-xl">
                    <img src="https://placeimg.com/192/192/people" />
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