import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from '../blog/SingleBlog';

const Blogs = () => {
    const blogs = useLoaderData();
    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = 'Blogs'
    }, []);
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-4xl text-center mb-5 font-bold'>
                <h2> Blogs : {blogs.length}</h2>
            </div>
            <div className='grid grid-cols-1 gap-5 mb-8'>
                {
                    blogs.map((blog, index) => <SingleBlog
                        key={blog._id}
                        blog={blog}
                        index={index}
                    ></SingleBlog>)
                }
            </div>
        </div>
    );
};

export default Blogs