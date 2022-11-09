import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SpinnerPage from '../../../SpinnerPage/SpinnerPage';
import SampleCard from './SampleCard';

const WorkSample = () => {
    const [workSample, setWorkSample] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setWorkSample(data))
    }, [])

    console.log(workSample)

    return (
        <div className='w-10/12 mx-auto'>
            <div className='bg-blue-200 rounded-lg py-2 mb-5'>
                <div className='text-4xl text-center font-bold'>
                    <h2>Some Work Sample{workSample.length}</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    workSample.map(work => <SampleCard
                        key={work._id}
                        work={work}
                    ></SampleCard>)
                }


            </div>
        </div>
    );
};

export default WorkSample;
