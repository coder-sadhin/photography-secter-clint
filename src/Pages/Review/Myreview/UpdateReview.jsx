import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const review = useLoaderData();
    const { serviceName, massage, _id } = review;
    const [massageText, setMassageText] = useState(massage);

    const commentChange = event => {
        const text = event.target.value;
        setMassageText(text)
    }
    console.log(massageText)


    const handleToUpdate = (id, massage) => {
        // console.log(id, massage)
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ massage: massage })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }




    return (
        <div className='py-20'>
            <div className='w-11/12 md:w-8/12 mx-auto'>
                <div className="card flex-shrink-0 w-full shadow-2xl shadow-slate-500 pb-20">
                    <h1 className="text-5xl font-bold my-3 text-center text-blue-700">Update Comments</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Comment For: <span className='text-green-600'>{serviceName}</span></span>
                            </label>
                            <input type="email" onChange={commentChange} defaultValue={massage} className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className='btn btn-primary' onClick={() => handleToUpdate(_id, massageText)}>Update</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdateReview;