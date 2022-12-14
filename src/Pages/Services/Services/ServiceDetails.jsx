import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation, Link } from 'react-router-dom';
import { FaCamera, FaMoneyBill, FaStopwatch } from 'react-icons/fa';
import SetReview from '../../Review/ServicsReview/SetReview';
import ServicesReview from '../../Review/ServicsReview/ServicsReview';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const location = useLocation();
    // console.log(service)
    const { camera_man, details, image_url, job_duration, price, title, total_hire, rating, _id } = service;

    const [reviews, setReviews] = useState([]);
    const [reviewTotal, setReviewTotal] = useState(0);

    let sortedReview = reviews.sort((a, b) => a.valueOf() - b.valueOf())

    useEffect(() => {
        fetch(`https://photographer-server-theta.vercel.app/service/review/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setReviewTotal(data.length)
            })
    }, [_id, reviewTotal])

    return (
        <div>
            {/* this is details section */}
            <div className="card w-11/12 md:w-8/12 lg:w-8/12 mx-auto mb-10 bg-blue-200 shadow-xl">
                <div className='w-11/12 mx-auto'>
                    <div className='my-5'>
                        <h2 className="text-3xl font-bold">
                            Service Name: <span className='text-emerald-600 link'>{title}</span>
                        </h2>
                        <h3 className="text-2xl my-3 font-bold">
                            Camera Man: <span className='text-blue-700'>{camera_man.name}</span>
                        </h3>
                    </div>
                    <div>
                        <img className='w-full rounded-lg' src={image_url} alt={title} />
                    </div>

                    <div className="my-5">
                        <div className=' mb-5'>
                            <h3 className='text-center font-bold text-3xl mb-3 text-emerald-600'>About Service</h3>
                            <p className='text-2xl text-justify'>{details}</p>
                        </div>
                        <div className='w-full my-5'>
                            <div className="stats w-full stats-vertical lg:stats-horizontal shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <FaCamera className='text-3xl' />
                                    </div>
                                    <div className="stat-title font-bold">Hired</div>
                                    <div className="stat-value"><span className='text-blue-600'>{total_hire}</span>K</div>
                                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <FaStopwatch className='text-3xl' />
                                    </div>
                                    <div className="stat-title">Working Strategy</div>
                                    <div className="stat-value"><span className='text-blue-600'>{job_duration}</span> Day</div>
                                    <div className="stat-desc text-green-800 font-bold">Ratings: {rating.number} {rating.badge}</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <FaMoneyBill className='text-3xl' />
                                    </div>
                                    <div className="stat-title">Service Value</div>
                                    <div className="stat-value"><span className='text-blue-600'>${price}</span>Day</div>
                                    <div className="stat-desc">8.00 AM - 11.00 PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* this is review view section */}


            <div className="pb-10">
                <ServicesReview
                    reviews={sortedReview}
                ></ServicesReview>
            </div>


            {/* this is review add section  */}


            {
                user?.email ?
                    <div>
                        <SetReview
                            title={title}
                            _id={_id}
                            reviewTotal={reviewTotal}
                            setReviewTotal={setReviewTotal}
                            image_url={image_url}
                        ></SetReview>
                    </div>
                    :
                    <div className="flex justify-center pb-5">
                        <Link to={'/login'} state={{ from: location }} replace className="btn btn-primary">
                            <button>Login For Post A review</button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default ServiceDetails;