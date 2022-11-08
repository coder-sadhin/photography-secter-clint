import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();


    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-4xl text-center mb-5 font-bold'>
                <h2> All Our Services : {services.length}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;