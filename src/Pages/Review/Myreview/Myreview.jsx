import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';
import Review from './Review';
import toast from 'react-hot-toast';

const Myreview = () => {

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = 'MyReview'
    }, []);

    useEffect(() => {
        fetch(`https://photographer-server-theta.vercel.app/myReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Photography_Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error("Try UnAuthorized Access? Please Login")
                    localStorage.removeItem('Photography_Token');
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data);
                if (data.length < 1) {
                    setEmpty(true)
                }
            })
    }, [user?.email])


    const handleToDeleteComment = (id) => {
        const proceed = window.confirm('Are you sure to cancel your order?')

        if (proceed) {
            fetch(`https://photographer-server-theta.vercel.app/review/${id}`, {
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
            <div>
                {
                    empty &&
                    <div className='flex justify-center py-20'>
                        <div className='py-10 px-20 bg-blue-200 rounded-xl'>
                            <h2 className='text-4xl font-bold'>No Review</h2>
                        </div>
                    </div>
                }
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