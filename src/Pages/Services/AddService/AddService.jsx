import React from 'react';

const AddService = () => {
    const handleToAddService = event => {
        event.preventDefault();
        const from = event.target;
        const title = from.title.value;
        const cameraMan = from.camera_man.value;
        const camera_man = { name: cameraMan };
        const price = from.price.value;
        const details = from.details.value;
        const job_duration = from.job_duration.value;
        const total_hire = from.total_hire.value;
        const image_url = from.image_url.value;
        const rating = { number: 4.5, badge: "Excellent" }

        const service = {
            title,
            rating,
            total_hire,
            camera_man,
            price,
            details,
            image_url,
            job_duration
        }
        console.log(service)

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Service Add Successfully');
                    from.reset();
                }
            })
            .catch(err => console.error(err))

    }
    return (
        <div>
            <div className="hero w-full my-10">
                <div className='w-1/2'>
                    <div className="card flex-shrink-0 w-full shadow-2xl shadow-slate-500 ">
                        <h1 className="text-5xl font-bold mt-5 text-center text-blue-700">Add A Service!</h1>
                        <form onSubmit={handleToAddService} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" required name='title' placeholder="Service Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Camera Man</span>
                                </label>
                                <input type="text" required name='camera_man' placeholder="Camera Man" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Value</span>
                                </label>
                                <input type="number" required name='price' placeholder="Service Value" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Details</span>
                                </label>
                                <input type="text" required name='details' placeholder="Service Details" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Duration</span>
                                </label>
                                <input type="number" required name='job_duration' placeholder="Service Duration" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Image URL</span>
                                </label>
                                <input type="text" required name='image_url' placeholder="Service Image url" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Hire</span>
                                </label>
                                <input type="number" required name='total_hire' placeholder="Service Hire" className="input input-bordered" />
                            </div>


                            <div className="form-control mt-3">
                                <input className='btn btn-primary' type="submit" value="Add Service" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddService;