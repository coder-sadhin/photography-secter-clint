import React from 'react';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SampleCard = ({ work }) => {
    // console.log(work.photoUrl)
    return (
        <div className='mx-auto'>
            <div className=" rounded-xl">
                <PhotoView src={work.photoUrl}>
                    <figure><img src={work.photoUrl} className='w-96 h-56 rounded-xl' alt="" /></figure>
                </PhotoView>
            </div>
        </div>
    );
};

export default SampleCard;