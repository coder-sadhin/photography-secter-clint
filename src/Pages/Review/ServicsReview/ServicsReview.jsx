import React from 'react';

const ServiceReview = ({ _id, title }) => {

    const handleReview = (event) => {
        event.preventDefault();
        const from = event.target;

        const name = `${from.firstName.value} ${from.lastName.value}`;
        const email = 'unRegistered';
        const massage = from.massage.value;

        const order = {
            service_id: _id,
            serviceName: title,
            name: name,
            email,
            massage
        }
        console.log(order)

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Order Place Successfully');
                    from.reset();
                }
            })
            .catch(err => console.error(err))

    }


    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-4xl text-center mb-5 font-bold'>
                <h2> Total Review :</h2>

                <div className='mt-24 mb-16'>
                    <div className='shadow-lg rounded-xl p-5 border border-blue-900'>
                        <h4 className='text-3xl text-indigo-400 mb-3'>Add Review</h4>
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
        </div>
    );
};

export default ServiceReview;