import React from 'react';

const SampleCard = ({ work }) => {
    console.log(work.photoUrl)
    return (
        <div className='mx-auto'>
            <div className=" rounded-xl">
                <figure><img src={work.photoUrl} className='w-96 h-56 rounded-xl' alt="" /></figure>
            </div>
        </div>
    );
};

export default SampleCard;