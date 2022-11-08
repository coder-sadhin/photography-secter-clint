import React from 'react';
import Review from './Review';

const ServicesReview = ({ reviews }) => {
    return (
        <div className='lg:w-8/12 md:w-8/12  w-11/12  mx-auto'>
            <div className='text-4xl text-center mb-5 font-bold'>
                <h2> Total Review : {reviews.length}</h2>
            </div>
            <div className='grid grid-cols-1 gap-5'>
                {
                    reviews.map((review, index) => <Review
                        key={review._id}
                        index={index}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default ServicesReview;