import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/AuthProvider/AuthProvider';

const ResetPass = () => {
    const { passwordReset } = useContext(AuthContext);
    // console.log(from)
    const navigate = useNavigate();

    const handleToPassReset = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        passwordReset(email)
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero my-10">
                <div className='w-11/12 md:w-8/12 mx-auto'>
                    <div className="card flex-shrink-0 w-full shadow-2xl shadow-slate-500 pb-20">
                        <h1 className="text-5xl font-bold my-3 text-center text-blue-700">Reset PassWord!</h1>
                        <form onSubmit={handleToPassReset} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResetPass;