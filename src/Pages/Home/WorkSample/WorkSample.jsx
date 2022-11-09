import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WorkSample = () => {
    const [workSample, setWorkSample] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/home/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    // console.log(services)

    return (
        <div className='w-10/12 mx-auto'>
            <div className='bg-blue-200 rounded-lg py-2 mb-5'>
                <div className='text-4xl text-center font-bold'>
                    <h2>Some Work Sample</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {/* {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                } */}
            </div>
        </div>
    );
};

export default WorkSample;
