import React from 'react';

const About = () => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto mb-5'>
            <div className='bg-blue-200 rounded-lg py-2 mb-5'>
                <div className='text-4xl text-center font-bold'>
                    <h2>About</h2>
                </div>
            </div>
            <div className="hero bg-blue-100 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://iili.io/pbd0yN.png" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Name: <span className=' mb-3'>MD. AKKAS ALI</span></h1>
                        <h3 className="text-3xl font-bold">Profession: <span className='text-lime-900 font-bold mb-3'>PHOTOGRAPHER</span></h3>
                        <p className="py-6">I am the honer of this website. Since 2017 to now , over of 1000 event I will handle. I have a cannon 700 camera and 10 lance for shot natural photograps. My average Pyment cost around $50. But Its not nasesary to fixed. Its up and down for working houer.</p>
                        <label htmlFor="about" className="btn btn-primary">Contact ME</label>
                    </div>
                </div>
            </div>

            {/* this is modal area */}
            <input type="checkbox" id="about" className="modal-toggle" />
            <label htmlFor="about" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-3xl font-bold">Thank You! For visiting My site</h3>
                    <p className="py-4 text-2xl text-indigo-600">This Section is Under Construction. Please Don`t Mind.</p>
                </label>
            </label>
        </div>
    );
};

export default About;