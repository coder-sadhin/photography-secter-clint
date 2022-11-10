import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';
import Review from './Review';

const Myreview = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = 'MyReview'
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`, {
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div className='lg:w-8/12 md:w-8/12  w-11/12  mx-auto'>
            <div className='text-4xl text-center mb-5 font-bold'>
                <h2> All Review : {reviews.length}</h2>
            </div>
            <div className='grid grid-cols-1 gap-5 pb-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Myreview;