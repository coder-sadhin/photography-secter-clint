import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';

const Register = () => {

    const { createUserWithEmail } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleToSignUp = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const PhotoURL = from.PhotoURL.value;

        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    navigate('/')
                }

            })
            .catch(err => console.error(err))

    }
    return (
        <div className="hero my-10">
            <div className='w-11/12 md:w-8/12 mx-auto'>
                <div className="card flex-shrink-0 w-full shadow-2xl shadow-slate-500 pb-20">
                    <h1 className="text-5xl font-bold my-3 text-center text-blue-700">Register From!</h1>
                    <form onSubmit={handleToSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='PhotoURL' placeholder="Enter PhotoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='text-center'>Already Have An Account? Please <Link className='text-primary font-bold' to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;