import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';
import Review from './Review';
import toast from 'react-hot-toast';

const Myreview = () => {

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = 'MyReview'
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error("Try UnAuthorized Access? Please Login")
                    localStorage.removeItem('photographyToken');
                    logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email])

    const handleToDeleteComment = (id) => {
        const proceed = window.confirm('Are you sure to cancel your order?')

        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('delete successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining)
                    }

                })
        }
    }

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
                        handleToDeleteComment={handleToDeleteComment}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Myreview;