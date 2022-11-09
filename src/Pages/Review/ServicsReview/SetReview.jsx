import React, { useContext } from 'react';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';

const SetReview = ({ _id, title, reviewTotal, setReviewTotal, image_url }) => {
    const { user } = useContext(AuthContext);

    const handleReview = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = `${from.firstName.value} ${from.lastName.value}`;
        const email = user?.email ? user.email : 'unRegistered';
        const massage = from.massage.value;
        const photoURL = user?.photoURL;

        const reviewObject = {
            service_id: _id,
            serviceName: title,
            name: name,
            email,
            massage,
            photoURL,
            image_url: image_url
        }
        // console.log(order)

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewObject)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const newLength = reviewTotal + 1;
                if (data.acknowledged) {
                    alert('Review Add Successfully');
                    from.reset();
                    setReviewTotal(newLength);
                }
            })
            .catch(err => console.error(err))

    }


    return (
        <div className='w-11/12 lg:w-8/12 md:w-8/12 mx-auto bg-blue-100'>
            <div className='mt-24 mb-16'>
                <div className='shadow-lg rounded-xl p-5 border border-blue-900'>
                    <h4 className='text-3xl text-indigo-400 font-bold text-center mb-5'>Add Review</h4>
                    <form onSubmit={handleReview} className='11/12 mx-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5'>
                            <input name="firstName" type="text" placeholder="Your First Name" className="input input-bordered  w-full" />
                            <input name="lastName" type="text" placeholder="Your Last Name" className="input input-bordered w-full" />
                        </div>
                        <textarea name="massage" className="textarea textarea-bordered mb-5 h-24 w-full" placeholder="Your Massage"></textarea>
                        <input className='btn btn-primary' type="submit" value="Place Your Review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SetReview;