import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleToSignUp = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password)

        // createUser(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //     })
        //     .catch(err => console.error(err))
    }
    return (
        <div className="hero w-full my-10">
            <div className='w-1/2'>
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