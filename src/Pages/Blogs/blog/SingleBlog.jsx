import React from 'react';

const SingleBlog = ({ blog, index }) => {
    console.log(index + 1);
    return (
        <div className="card lg:w-full w-11/12 mx-auto bg-blue-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl text-blue-600">Q{index + 1}:-- {blog.qus}</h2>
                <p className='font-semibold'>Answer: {blog.ans}</p>
            </div>
        </div>
    );
};

export default SingleBlog;