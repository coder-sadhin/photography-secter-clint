import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';
import SpinnerPage from '../../../SpinnerPage/SpinnerPage';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();
    const { setTitle } = useContext(AuthContext);

    setTitle('Services')

    return (
        <div>
            {
                services ?
                    <div className='w-11/12 mx-auto'>
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
                    :
                    <SpinnerPage></SpinnerPage>
            }
        </div>
    );
};

export default Services;